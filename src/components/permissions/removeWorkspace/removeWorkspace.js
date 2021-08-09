import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, Fab, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import useStyles from './styles';
import { WORKSPACES_QUERY } from '../../../utils/queries/workspacesQuery';

const DELETE_WORKSPACE = gql`
  mutation remove($id: ID) {
    removeWorkspace(id: $id)
}
`;

export const RemoveWorkspace = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [deleteWorkspace, { loading }] = useMutation(DELETE_WORKSPACE, {
    update(_, __) {
      router.push('/workspaces');
      toast.info('Workspace removido com sucesso!');
    },
    onError(err) {
      toast.error('Não foi possível remover workspace');
    },
    refetchQueries: [
      {
        query: WORKSPACES_QUERY,
      },
    ],
  });

  const handleDeleteWorkspace = () => {
    deleteWorkspace({
      variables: {
        id,
      },
    });
    handleClose();
  };
  return (
    <>
      <Fab className={classes.fab} onClick={handleOpen}>
        <DeleteIcon className={classes.icon} />
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
              Tem certeza que deseja excluir este workspace?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={handleDeleteWorkspace} autoFocus>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
