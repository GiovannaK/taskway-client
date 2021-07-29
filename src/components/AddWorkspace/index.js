import {
  Button, Card,
  CardContent,
  Dialog,
  DialogActions, DialogContent, DialogContentText,
  Fab, TextField, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import useStyles from './styles';
import { CREATE_WORKSPACE } from '../../utils/queries/createWorkspaces';
import { WORKSPACES_QUERY } from '../../utils/queries/workspacesQuery';
import { createWorkspaceValidation } from '../../utils/createWorkspaceValidation';

export const AddWorkspace = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [variables, setVariables] = useState({
    title: '',
  });
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [createWorkspace, { loading }] = useMutation(CREATE_WORKSPACE, {
    update(_, __) {
      toast.info(`${variables.title} foi criado com sucesso`);
    },
    onError(err) {
      toast.error('Não foi possível criar workspace');
    },
    refetchQueries: [
      {
        query: WORKSPACES_QUERY,
      },
    ],
  });

  const handleCreate = () => {
    const hasInvalidFields = createWorkspaceValidation(variables.title);
    if (hasInvalidFields) {
      return;
    }
    createWorkspace({ variables });
    handleClose();
  };
  return (
    <>
      <Fab className={classes.fab} onClick={handleOpen}>
        <AddIcon className={classes.icon} />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className={classes.dialog}>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h5" className={classes.title}>
              Criar um Workspace
            </Typography>
          </DialogContentText>
          <Card className={classes.card} elevation={0}>
            <CardContent>
              <form>
                <TextField
                  id="title"
                  label="Título"
                  variant="outlined"
                  required
                  defaultValue="Default Value"
                  fullWidth
                  InputLabelProps={{
                    className: classes.label,
                  }}
                  value={variables.title}
                  onChange={(e) => setVariables({ ...variables, title: e.target.value })}
                />
              </form>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={handleCreate} disabled={loading} color="primary" autoFocus>
            Criar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
