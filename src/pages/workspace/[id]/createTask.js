/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Box, Grid, Card, CardContent, TextField, Select, InputLabel,
  MenuItem,
  Button,
  Toolbar,
  Chip,
  Avatar,
  Input,
  Typography,
  Hidden,
} from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'moment/locale/pt-br';
import moment from 'moment';
import { useRouter } from 'next/router';
import { gql, useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import PublishIcon from '@material-ui/icons/Publish';
import { PaperComponent } from '../../../components/PaperComponent';
import { TopBar } from '../../../components/TopBar';
import useStyles from '../../../styles/createTask';
import Layout from '../../../components/Layout';
import { Loading } from '../../../components/Loading';
import { createTaskValidation } from '../../../utils/createTaskValidation';
import { TaskCard } from '../../../components/Task/TaskCard';
import { QUERY_TASKS } from '../../../utils/queries/queryTasks';
import { USERS_WORKSPACE } from '../../../utils/queries/queryUsersWorkspaces';
import withAuthAndPermission from '../../../utils/withAuthAndPermissions';
import { TASK_SITUATION } from '../../../utils/queries/taskSituationQuery';
import { TabComponent } from '../../../components/TabComponent';

const CREATE_TASK = gql`
  mutation createTask($workspaceId: ID! $title: String! $link: String $description: String! $maxDate: String $priority: String $assignTo: ID!) {
    createTask(workspaceId: $workspaceId, title: $title, description: $description, link: $link maxDate: $maxDate priority: $priority assignTo: $assignTo){
      id
      workspaceId
      title
      link
      maxDate
      progress
      file
      priority
       assignTo
    }
  }

`;

const createTask = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
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

  const [variables, setVariables] = useState({
    title: '',
    description: '',
    link: '',
    priority: '',
    assignTo: '',
    maxDate: new Date(),
  });

  const handleDateChange = (date) => {
    setVariables({ ...variables, maxDate: date });
  };

  const handlePriority = (e) => {
    setVariables({ ...variables, priority: e.target.value });
  };

  const handleAssignTo = (e) => {
    setVariables({ ...variables, assignTo: e.target.value });
  };

  const [taskCreate, { loading }] = useMutation(CREATE_TASK, {
    update(_, __) {
      toast.info(`${variables.title} foi criada com sucesso`);
    },
    onError(err) {
      toast.error('Não foi possível criar tarefa');
    },
    refetchQueries: [
      {
        query: QUERY_TASKS,
        variables: {
          workspaceId: id,
          progress: '',
          priority: '',
          assignTo: '',
          maxDate: '',
        },
      },
      {
        query: TASK_SITUATION,
        variables: {
          workspaceId: id,
        },
      },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasInvalidFields = createTaskValidation(
      variables.title, variables.description,
      variables.priority, variables.assignTo,
    );

    if (hasInvalidFields) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    taskCreate({
      variables: {
        title: variables.title,
        description: variables.description,
        priority: variables.priority,
        assignTo: variables.assignTo,
        link: variables.link,
        maxDate: variables.maxDate,
        workspaceId: id,
      },
    });
  };

  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Taskway | Criar Tarefa">
        <TabComponent />
        <Box pt={12}>
          <Grid container align="center" justify="center">
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <Toolbar />
                  <Typography variant="h5" className={classes.title}>
                    Adicionar Tarefa
                  </Typography>
                  <Toolbar />
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                          id="standard-helperText"
                          label="Título"
                          variant="outlined"
                          required
                          className={classes.input}
                          InputLabelProps={{
                            className: classes.label,
                          }}
                          value={variables.title}
                          onChange={(e) => setVariables({ ...variables, title: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                          id="standard-helperText"
                          label=" Descrição"
                          variant="outlined"
                          rows={4}
                          multiline
                          required
                          className={classes.input}
                          InputLabelProps={{
                            className: classes.label,
                          }}
                          value={variables.description}
                          onChange={(e) => setVariables({ ...variables, description: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <InputLabel className={classes.label} id="priority">
                          Prioridade
                        </InputLabel>
                        <Select
                          id="priority"
                          defaultValue="Default Value"
                          multiline
                          variant="outlined"
                          className={classes.input}
                          value={variables.priority}
                          onChange={handlePriority}
                          required
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
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <InputLabel className={classes.label} id="assignedTo">
                          Atribuir
                        </InputLabel>
                        <Select
                          id="assignedTo"
                          defaultValue="Default Value"
                          multiline
                          variant="outlined"
                          className={classes.input}
                          value={variables.assignTo}
                          onChange={handleAssignTo}
                          disabled={loadingUserWorkspaces}
                          required

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
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <InputLabel className={classes.label} id="link">
                          Link
                        </InputLabel>
                        <TextField
                          id="link"
                          variant="outlined"
                          className={classes.input}
                          InputLabelProps={{
                            className: classes.label,
                          }}
                          value={variables.link}
                          onChange={(e) => setVariables({ ...variables, link: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                          type="submit"
                          className={classes.button}
                          variant="contained"
                          disabled={loading}
                        >
                          {loading ? 'Criando...' : 'Criar Tarefa'}
                        </Button>
                        <Toolbar />
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
            <Hidden mdDown>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Card className={classes.card} elevation={0}>
                  <CardContent>
                    <Toolbar />
                    <img src="../../complete_task.svg" alt="svg de tarefa" className={classes.svg} />
                  </CardContent>
                </Card>
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>

  );
};

export default withAuthAndPermission(createTask);
