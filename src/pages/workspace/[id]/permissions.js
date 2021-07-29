import {
  Box, CardContent, Grid, Card, Chip, Avatar,
  Typography,
  CardHeader,
  Divider,
  Toolbar,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { gql, useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import useStyles from '../../../styles/permissions';
import { PaperComponent } from '../../../components/PaperComponent';
import Layout from '../../../components/Layout';
import { TopBar } from '../../../components/TopBar';
import { AddPermissionForm } from '../../../components/permissions/AddPermissionForm';
import { Loading } from '../../../components/Loading';
import { QUERY_USERS_PERMISSIONS } from '../../../utils/queries/queryUsersPermissions';
import withAuth from '../../../utils/withAuth';

const DELETE_PERMISSIONS = gql`
  mutation removeUserPermission($workspaceId: ID!, $userId: ID!, $permissionId: ID!) {
  removeUserPermission(workspaceId: $workspaceId, userId: $userId, permissionId: $permissionId)
}
`;

const permissions = () => {
  const router = useRouter();
  const { id } = router.query;
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [variables, setVariables] = useState({
    userId: '',
    permissionId: '',
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [deletePermission, { loading: loadingDelete }] = useMutation(DELETE_PERMISSIONS, {
    update(_, __) {
      toast.info('Permissão excluída com sucesso.');
    },
    onError(err) {
      toast.error('Não foi possível excluir permissão');
    },
    refetchQueries: [
      {
        query: QUERY_USERS_PERMISSIONS,
        variables: {
          workspaceId: id,
        },
      },
    ],
  });

  const handlePermission = () => {
    deletePermission({
      variables: {
        workspaceId: id,
        userId: variables.userId,
        permissionId: variables.permissionId,
      },
    });
    setVariables({
      ...variables,
      userId: '',
      permissionId: '',
    });
    handleCloseDialog();
  };

  const {
    error, loading,
    data: { usersPermissionsByWorkspace: usersPermissions } = {},
  } = useQuery(QUERY_USERS_PERMISSIONS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      workspaceId: id,
    },
  });

  if (loading) {
    <Loading />;
  }

  if (error) {
    <Loading />;
  }
  return (
    <>
      <PaperComponent>
        <TopBar />
        <Layout>
          <Box pt={10}>
            <Grid container spacing={1} justify="center">
              <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
                {!usersPermissions || !usersPermissions.length ? (
                  <Card>
                    <CardContent>
                      <Toolbar />
                      <Typography
                        variant="h6"
                        align="center"
                        className={classes.title}
                      >
                        Sem permissões

                      </Typography>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className={classes.card}>
                    <CardHeader
                      titleTypographyProps={{ variant: 'h5' }}
                      title="Gerenciar Permissões"
                      align="center"
                      classes={{ title: classes.headerTitle }}
                    />
                    <Divider />
                    <CardContent>
                      <Box align="center" pb={2}>
                        {usersPermissions[0] && (
                          usersPermissions[0].permissions_users.map((user) => (

                            <Chip
                              className={classes.avatar}
                              key={user.id}
                              value={variables.userId}
                              onClick={(e) => {
                                setVariables({
                                  ...variables,
                                  userId: user.id,
                                  permissionId: usersPermissions[0].id,
                                });
                                handleOpenDialog();
                              }}
                              avatar={(
                                <Avatar
                                  key={user.id}
                                  src={user.profile.imageUrl ? user.profile.imageUrl
                                    : ''}
                                />
                              )}
                              label={`${user.firstName} ${user.lastName} - Adicionar Tarefa`}
                              clickable
                            />
                          ))
                        )}
                      </Box>
                      <Box align="center" pb={2}>
                        {usersPermissions[1] && (
                          usersPermissions[1].permissions_users.map((user) => (

                            <Chip
                              className={classes.avatar}
                              key={user.id}
                              value={variables.userId}
                              onClick={(e) => {
                                setVariables({
                                  ...variables,
                                  userId: user.id,
                                  permissionId: usersPermissions[1].id,
                                });
                                handleOpenDialog();
                              }}
                              avatar={(
                                <Avatar
                                  key={user.id}
                                  src={user.profile.imageUrl ? user.profile.imageUrl
                                    : ''}
                                />
                              )}
                              label={`${user.firstName} ${user.lastName} - Editar Tarefa`}
                              clickable
                            />
                          ))
                        )}
                      </Box>
                      <Box align="center">
                        {usersPermissions[2] && (
                          usersPermissions[2].permissions_users.map((user) => (

                            <Chip
                              className={classes.avatar}
                              key={user.id}
                              value={variables.userId}
                              onClick={(e) => {
                                setVariables({
                                  ...variables,
                                  userId: user.id,
                                  permissionId: usersPermissions[2].id,
                                });
                                handleOpenDialog();
                              }}
                              avatar={(
                                <Avatar
                                  key={user.id}
                                  src={user.profile.imageUrl ? user.profile.imageUrl
                                    : ''}
                                />
                              )}
                              label={`${user.firstName} ${user.lastName} - Excluir Tarefa`}
                              clickable
                            />
                          ))
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
                <AddPermissionForm />
              </Grid>
            </Grid>
          </Box>
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Typography variant="h5" className={classes.title}>
                  Tem certeza que deseja apagar esta permissão do usuário selecionado?
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Cancelar
              </Button>
              <Button onClick={handlePermission} disabled={loadingDelete} color="primary" autoFocus>
                Apagar
              </Button>
            </DialogActions>
          </Dialog>
        </Layout>
      </PaperComponent>
    </>
  );
};

export default withAuth(permissions);
