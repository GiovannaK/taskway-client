/* eslint-disable no-useless-return */
import {
  Avatar,
  Button,
  Card, CardContent,
  CardHeader, Chip, Divider, Grid, InputLabel, MenuItem, Select,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { gql, useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import useStyles from './styles';
import { Loading } from '../Loading';
import { QUERY_USERS_PERMISSIONS } from '../../utils/queries/queryUsersPermissions';
import { addPermissionValidation } from '../../utils/addPermissionValidation';

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

const QUERY_PERMISSION = gql`
  query showPermissions{
  showPermissions{
    id
    name
    createdAt
    updatedAt
  }
}
`;

const MUTATION_ADD_PERMISSION = gql`
  mutation addUserPermission($workspaceId: ID!, $userId: ID!, $permissionId: ID!) {
  addUserPermission(workspaceId: $workspaceId, userId: $userId, permissionId: $permissionId){
    id
   userId
    permissionId
    workspaceId
  }
}
`;

export const AddPermissionForm = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [variables, setVariables] = useState({
    userId: '',
    permissionId: '',
  });

  const handleUser = (e) => {
    setVariables({ ...variables, userId: e.target.value });
  };
  const handlePermission = (e) => {
    setVariables({ ...variables, permissionId: e.target.value });
  };

  const {
    error: errorUserWorkspaces, loading: loadingUserWorkspaces,
    data: { usersWorkspace } = {},
  } = useQuery(USERS_WORKSPACE, {
    variables: {
      id,
    },
  });

  const [addPermission, { loading }] = useMutation(MUTATION_ADD_PERMISSION, {
    update(_, __) {
      toast.info('Permissão adicionada com sucesso');
    },
    onError(err) {
      toast.error('Não foi possível adicionar permissão, verifique se o usuário selecionado já possui esta permissão.');
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

  const {
    error: errorPermissions, loading: loadingPermissions,
    data: { showPermissions } = {},
  } = useQuery(QUERY_PERMISSION);

  if (errorPermissions) {
    <Loading />;
  }

  if (errorUserWorkspaces) {
    <Loading />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasInvalidFields = addPermissionValidation(
      variables.userId, variables.permissionId,
    );

    if (hasInvalidFields) {
      return;
    }

    addPermission({
      variables: {
        workspaceId: id,
        userId: variables.userId,
        permissionId: variables.permissionId,
      },
    });
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        titleTypographyProps={{ variant: 'h5' }}
        title="Adicionar Permissões"
        align="center"
        classes={{ title: classes.headerTitle }}
      />
      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputLabel className={classes.label} id="priority">
                Membro do workspace
              </InputLabel>
              <Select
                id="assignedTo"
                defaultValue="Default Value"
                multiline
                variant="outlined"
                className={classes.input}
                value={variables.userId}
                onChange={handleUser}
                disabled={loadingUserWorkspaces}
              >
                {!usersWorkspace ? (
                  []
                ) : (
                  usersWorkspace.map((user) => (

                    <MenuItem value={user.id} key={user.id}>
                      <Chip
                        avatar={(
                          <Avatar
                            src={user.profile.imageUrl ? user.profile.imageUrl
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
              <InputLabel className={classes.label} id="priority">
                Tipo de permissão
              </InputLabel>
              <Select
                id="priority"
                defaultValue="Default Value"
                multiline
                variant="outlined"
                value={variables.permissionId}
                onChange={handlePermission}
                className={classes.input}
                disabled={loadingPermissions}
              >
                {!showPermissions ? (
                  []
                ) : (
                  showPermissions.slice(0, 3).map((permission) => (
                    <MenuItem value={permission.id} key={permission.id}>
                      {(() => {
                        if (permission.name === 'createTask') {
                          return 'Adicionar tarefas';
                        }
                        if (permission.name === 'updateTask') {
                          return 'Editar tarefas';
                        }
                        return 'Excluir tarefas';
                      })()}
                    </MenuItem>

                  ))
                )}
              </Select>
            </Grid>
            <Button
              variant="outlined"
              className={classes.button}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Carregando' : 'Salvar'}

            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};
