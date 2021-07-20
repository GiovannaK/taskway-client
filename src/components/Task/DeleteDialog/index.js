import React from 'react';
import {
  Dialog,
  DialogContentText, DialogContent, DialogActions, Button, Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import useStyles from './styles';
import { QUERY_TASKS } from '../../../utils/queries/queryTasks';

const DELETE_TASK = gql`
  mutation deleteTask($id: ID!, $workspaceId: ID!) {
    deleteTask(id: $id, workspaceId: $workspaceId)
  }
`;

export const DeleteDialog = ({ openDeleteDialog, handleCloseDeleteDialog }) => {
  const classes = useStyles();
  const router = useRouter();
  const { id, taskId } = router.query;
  console.log(id, taskId);

  const [deleteTask, { loading }] = useMutation(DELETE_TASK, {
    update(_, __) {
      router.push(`/workspace/${id}`);
      toast.info('Tarefa deletada com sucesso');
    },
    onError(err) {
      toast.error('Não foi possível deletar tarefa');
    },
    refetchQueries: [
      {
        query: QUERY_TASKS,
        variables: {
          workspaceId: id,
        },
      },
    ],
  });

  const handleDelete = () => {
    deleteTask({
      variables: {
        id: taskId,
        workspaceId: id,
      },
    });
  };
  return (
    <Dialog
      open={openDeleteDialog}
      onClose={handleCloseDeleteDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="h5" className={classes.title}>
            Tem certeza que deseja apagar esta tarefa?
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDeleteDialog} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDelete} disabled={loading} color="primary" autoFocus>
          Apagar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
