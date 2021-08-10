import { gql, useMutation } from '@apollo/client';
import {
  Box,
  Button, Card,
  CardContent, Dialog, DialogActions,
  DialogContent, DialogContentText, Divider, Grid, Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { RoomContext } from '../../context/RoomContext';
import useStyles from './styles';

const CREATE_ROOM = gql`
  mutation createRoom($workspaceId: ID){
    createRoom(workspaceId: $workspaceId)
  }
`;

export const CreateChatRoom = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const { ROOM } = useContext(RoomContext);

  const [createRoom, { loading }] = useMutation(CREATE_ROOM, {
    update(_, __) {
      toast.info('Sala criada com sucesso');
    },
    onError(err) {
      toast.error('Não foi possível criar sala, verifique se já foi criada.');
    },
    refetchQueries: [
      {
        query: ROOM,
        variables: {
          workspaceId: id,
        },
      },
    ],
  });

  const handleRoom = () => {
    createRoom({
      variables: {
        workspaceId: id,
      },
    });
  };
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Box pb={3}>
            <Typography
              align="center"
              className={classes.title}
              variant="h5"
            >
              Configurações
            </Typography>
          </Box>
          <Grid container spacing={2} align="center" justify="center">
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography variant="h6" className={classes.subtitle}>
                sala de bate-papo
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Button
                variant="outlined"
                disabled={loading}
                className={classes.button}
                onClick={handleRoom}
              >
                Criar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
