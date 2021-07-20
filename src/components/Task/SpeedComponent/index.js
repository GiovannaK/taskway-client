/* eslint-disable no-useless-return */
import React from 'react';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDial from '@material-ui/lab/SpeedDial';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MomentUtils from '@date-io/moment';
import {
  DialogContentText,
  Dialog, DialogActions,
  DialogContent, DialogTitle, Button, Grid,
  TextField,
  Chip,
  Avatar,
  InputLabel, MenuItem, Select, CardContent, Card, Typography, Toolbar,
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import { gql, useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { DropzoneDialog } from 'material-ui-dropzone';
import useStyles from './styles';
import { Loading } from '../../Loading';
import { updateTaskValidation } from '../../../utils/updateTaskValidation';
import { DeleteDialog } from '../DeleteDialog';

const USERS_WORKSPACE = gql`
  query usersWorkspace($id: ID!) {
    usersWorkspace(id: $id){
      firstName
      lastName
      email
      id
      profile {
        imageUrl
      }
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation taskSingleUpload($id: ID!, $file: Upload!, $workspaceId: ID!) {
  taskSingleUpload(id: $id, file: $file, workspaceId: $workspaceId){
    filename
    encoding
    mimetype
    file
  }
}
`;

const UPDATE_TASK = gql`
  mutation updateTask($id: ID!, $workspaceId: ID! $title: String! $link: String $description: String! $maxDate: String $progress: String $priority: String $assignTo: ID!) {
    updateTask(id: $id, workspaceId: $workspaceId, title: $title, description: $description, link: $link maxDate: $maxDate progress: $progress priority: $priority assignTo: $assignTo){
      id
        workspaceId
        title
        description
        link
        maxDate
        progress
        file
        priority
         assignTo
    }
  }
`;

export const SpeedComponent = ({
  taskDetail, QUERY_TASKS_BY_ID,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { id, taskId } = router.query;
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const [variables, setVariables] = React.useState({
    title: '',
    description: '',
    link: '',
    priority: '',
    assignTo: '',
    maxDate: '',
    progress: '',
  });

  const {
    error: errorUserWorkspaces, loading: loadingUserWorkspaces,
    data: { usersWorkspace } = {},
  } = useQuery(USERS_WORKSPACE, {
    variables: {
      id,
    },
  });

  const [updateTask, { loading }] = useMutation(UPDATE_TASK, {
    update(_, __) {
      toast.info(`${variables.title} foi atualizada com sucesso`);
    },
    onError(err) {
      toast.error('Não foi possível criar tarefa');
    },
    refetchQueries: [
      {
        query: QUERY_TASKS_BY_ID,
        variables: {
          workspaceId: id,
          id: taskId,
        },
      },
    ],
  });

  if (errorUserWorkspaces) {
    <Loading />;
  }

  const [uploadFile, { loading: loadingUpload }] = useMutation(UPLOAD_FILE, {
    update(_, __) {
      toast.info('Arquivo adicionado com sucesso');
    },
    onError(err) {
      toast.error('Não foi possível adicionar arquivo');
    },
    refetchQueries: [
      {
        query: QUERY_TASKS_BY_ID,
        variables: {
          workspaceId: id,
          id: taskId,
        },
      },
    ],
  });

  React.useEffect(() => {
    if (taskDetail && taskDetail.tasksUsers) {
      setVariables({
        ...variables,
        title: taskDetail.title,
        description: taskDetail.description,
        link: taskDetail.link,
        progress: taskDetail.progress,
        priority: taskDetail.priority,
        maxDate: moment.unix(taskDetail.maxDate / 1000),
        assignTo: taskDetail.assignTo,
      });
    }
  }, [taskDetail]);

  const handleDateChange = (date) => {
    setVariables({ ...variables, maxDate: date });
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const actions = [
    { icon: <EditIcon className={classes.icon} onClick={handleOpenDialog} />, name: 'Editar' },
    { icon: <DeleteIcon className={classes.icon} onClick={handleOpenDeleteDialog} />, name: 'Apagar' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasInvalidFields = updateTaskValidation(
      variables.title,
      variables.description,
      variables.priority,
      variables.assignTo,
      variables.progress,
    );

    if (hasInvalidFields) {
      return;
    }

    updateTask({
      variables: {
        id: taskId,
        title: variables.title,
        description: variables.description,
        priority: variables.priority,
        assignTo: variables.assignTo,
        link: variables.link,
        maxDate: variables.maxDate,
        progress: variables.progress,
        workspaceId: id,
      },
    });
  };
  return (
    <>
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
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="updateTask"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {/* <Card className={classes.card} variant="outlined"> */}
          <CardContent>
            <Typography
              align="center"
              variant="h5"
              className={classes.title}
            >
              Atualizar

            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                    id="title"
                    label="Título"
                    variant="outlined"
                    required
                    defaultValue="Default Value"
                    className={classes.input}
                    InputLabelProps={{
                      className: classes.label,
                    }}
                    value={variables.title}
                    onChange={(e) => setVariables({ ...variables, title: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                    id="link"
                    label="Link"
                    defaultValue="Default Value"
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
                  <TextField
                    id="description"
                    label=" Descrição"
                    defaultValue="Default Value"
                    variant="outlined"
                    rows={4}
                    multiline
                    className={classes.input}
                    InputLabelProps={{
                      className: classes.label,
                    }}
                    value={variables.description}
                    onChange={(e) => setVariables({ ...variables, description: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <InputLabel className={classes.label} id="status">
                    Progresso
                  </InputLabel>
                  <Select
                    id="progress"
                    defaultValue="Default Value"
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
                        /* margin="normal" */
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
                  <Button
                    type="submit"
                    className={classes.button}
                    variant="outlined"
                    disabled={loading}
                  >
                    Atualizar
                  </Button>
                </Grid>
              </Grid>
              <Toolbar />
              <Button
                className={classes.uploadButton}
                variant="outlined"
                onClick={() => setOpenUpload(true)}
              >
                Adicionar arquivo
              </Button>
            </form>
          </CardContent>
          {/* </Card> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
      <DeleteDialog
        openDeleteDialog={openDeleteDialog}
        handleCloseDeleteDialog={handleCloseDeleteDialog}
      />
      <DropzoneDialog
        /* acceptedFiles={['.pdf', '.xls', '.doc', '.docx', '.csv']} */
        cancelButtonText="cancelar"
        submitButtonText="enviar"
        maxFileSize={3145728}
        open={openUpload}
        filesLimit={1}
        onClose={() => setOpenUpload(false)}
        onSave={(files) => {
          const file = files[0];
          console.log(file);
          uploadFile({ variables: { file, id: taskId, workspaceId: id } });
          setOpenUpload(false);
        }}
        showPreviews
        showFileNamesInPreview
      />
    </>
  );
};
