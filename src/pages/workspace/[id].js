import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDial from '@material-ui/lab/SpeedDial';
import {
  Box, Grid, Typography,
  Toolbar, Fab, CardContent, Card, InputLabel, Select, MenuItem, Chip, Avatar, Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import MomentUtils from '@date-io/moment';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import momentTz from 'moment-timezone';
import { useState, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import LockIcon from '@material-ui/icons/Lock';
import useStyles from '../../styles/workspaceDetail';
import { PaperComponent } from '../../components/PaperComponent';
import { TopBar } from '../../components/TopBar';
import Layout from '../../components/Layout';
import { Tasks } from '../../components/Workspace/Tasks';
import { Loading } from '../../components/Loading';
import withAuthAndPermission from '../../utils/withAuthAndPermissions';
import { QUERY_TASKS } from '../../utils/queries/queryTasks';
import 'moment/locale/pt-br';
import { usePermission } from '../../hooks/usePermission';
import { TabComponent } from '../../components/TabComponent';
import { USERS_WORKSPACE } from '../../utils/queries/queryUsersWorkspaces';

const workspace = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const [variables, setVariables] = useState({
    priority: '',
    assignTo: '',
    maxDate: '',
    progress: '',
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDateChange = (date) => {
    setVariables({ ...variables, maxDate: momentTz.utc(date).add(1, 'days') });
  };

  const handlePriority = (e) => {
    setVariables({ ...variables, priority: e.target.value });
  };

  const handleAssignTo = (e) => {
    setVariables({ ...variables, assignTo: e.target.value });
  };

  const handleProgress = (e) => {
    setVariables({ ...variables, progress: e.target.value });
  };

  const cleanFilter = () => {
    setVariables({
      ...variables, maxDate: '', priority: '', progress: '', assignTo: '',
    });
  };

  const actions = [
    { icon: <Link href={`${id}/createTask`}><EditIcon className={classes.icon} /></Link>, name: 'Adicionar' },
    { icon: <Link href={`${id}/permissions`}><LockIcon className={classes.icon} /></Link>, name: 'Permissões' },
  ];

  const {
    error: errorUserWorkspaces, loading: loadingUserWorkspaces,
    data: { usersWorkspace } = {},
  } = useQuery(USERS_WORKSPACE, {
    variables: {
      id,
    },
  });

  if (errorUserWorkspaces) {
    <Loading />;
  }

  const {
    data: { tasks } = {},
    error, loading,
  } = useQuery(QUERY_TASKS, {
    variables: {
      workspaceId: id,
      progress: variables.progress,
      assignTo: variables.assignTo,
      priority: variables.priority,
      maxDate: variables.maxDate,
    },
  });

  if (error) {
    <Loading />;
  }

  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Taskway | Workspace">
        <TabComponent />
        <Toolbar />
        {loading ? (<Loading />) : (
          <Box pt={10}>
            <Grid container spacing={2} align="center" justify="center">
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card className={classes.card} variant="outlined">
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                        <InputLabel
                          id="progress"
                          className={classes.label}
                        >
                          Progresso
                        </InputLabel>
                        <Select
                          id="progress"
                          multiline
                          variant="outlined"
                          className={classes.input}
                          value={variables.progress}
                          onChange={handleProgress}
                        >
                          <MenuItem value="Not started">
                            Não Iniciada
                          </MenuItem>
                          <MenuItem value="In progress">
                            Em Progresso
                          </MenuItem>
                          <MenuItem value="finished">
                            Finalizada
                          </MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                        <InputLabel className={classes.label} id="priority">
                          Prioridade
                        </InputLabel>
                        <Select
                          id="priority"
                          multiline
                          variant="outlined"
                          className={classes.input}
                          value={variables.priority}
                          onChange={handlePriority}
                        >
                          <MenuItem value="Low">
                            Baixa
                          </MenuItem>
                          <MenuItem value="Medium">
                            Média
                          </MenuItem>
                          <MenuItem value="High">
                            Alta
                          </MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                        <InputLabel className={classes.label} id="maxDate">
                          Prazo
                        </InputLabel>
                        <MuiPickersUtilsProvider locale={moment.locale('pt-br')} utils={MomentUtils}>
                          <KeyboardDatePicker
                            disableToolbar
                            variant="outlined"
                            format="DD/MM/YYYY"
                            inputVariant="outlined"
                            id="maxDate"
                            value={variables.maxDate}
                            onChange={handleDateChange}
                            error={false}
                            style={{ width: '100%' }}
                            InputLabelProps={{
                              className: classes.label,
                            }}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Grid>
                      <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                        <InputLabel className={classes.label} id="assignedTo">
                          Atribuir
                        </InputLabel>
                        <Select
                          id="assignedTo"
                          multiline
                          variant="outlined"
                          className={classes.input}
                          value={variables.assignTo}
                          onChange={handleAssignTo}
                          disabled={loadingUserWorkspaces}
                        >
                          {!usersWorkspace ? (
                            []
                          ) : (
                            usersWorkspace.map((user) => (

                              <MenuItem value={user.id} key={user.id}>
                                <Chip
                                  avatar={(
                                    <Avatar src={user.profile.imageUrl ? user.profile.imageUrl
                                      : ''}
                                    />
                                  )}
                                  label={`${user.firstName} ${user.lastName}`}
                                  variant="outlined"
                                />
                              </MenuItem>
                            ))
                          )}
                        </Select>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button className={classes.button} onClick={cleanFilter}>
                          Limpar
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Toolbar />
            <Grid container spacing={3} align="center" justify="center">
              {tasks && !tasks.length ? (
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.svgGrid}>
                  <img src="../noTasks.svg" alt="svg sem tarefas" className={classes.svg} />
                  <Toolbar />
                  <Typography
                    variant="h5"
                    className={classes.title}
                  >
                    Nenhuma tarefa encontrada!

                  </Typography>
                </Grid>
              ) : (

                tasks && tasks.map((task) => (
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={task.id}>
                    <Tasks task={task} />
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        )}
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<EditIcon className={classes.icon} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="up"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Layout>
    </PaperComponent>
  );
};

export default withAuthAndPermission(workspace);
