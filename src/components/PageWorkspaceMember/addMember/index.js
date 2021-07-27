/* eslint-disable no-nested-ternary */
import { gql, useMutation, useQuery } from '@apollo/client';
import {
  Avatar, Box, Button, Card, CardContent, IconButton, TextField, Typography,
} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { USERS_WORKSPACE } from '../../../utils/queries/queryUsersWorkspaces';
import { Loading } from '../../Loading';
import useStyles from './styles';

const SEARCH_QUERY = gql`
  query users($query: String){
    users(query: $query){
      id
      firstName
      lastName
      email
      profile{
        imageUrl
      }
    }
  }
`;

const ADD_USER_TO_WORKSPACE = gql`
  mutation addUserToWorkspace($workspaceId: ID!, $userId: ID!) {
    addUserToWorkspace(workspaceId: $workspaceId, userId: $userId){
     workspaceId
      userId

    }
}
`;

export const AddMember = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [variables, setVariables] = useState({
    query: '',
  });

  const [addUser, { loading }] = useMutation(ADD_USER_TO_WORKSPACE, {
    update(_, __) {
      toast.info('Usuário adicionado com sucesso');
    },
    onError(err) {
      toast.error('Não foi possível adicionar usuário');
    },
    refetchQueries: [
      {
        query: USERS_WORKSPACE,
        variables: {
          id,
        },
      },
    ],
  });

  const cleanFilter = () => {
    setVariables({
      ...variables, query: '',
    });
  };

  const {
    data: { users } = {},
    error: errorUsers, loading: loadingUsers,
  } = useQuery(SEARCH_QUERY, {
    variables: {
      query: variables.query,
    },
  });

  if (errorUsers) {
    <Loading />;
  }

  return (
    <Card square className={classes.card}>
      <CardContent>
        <Typography
          variant="h5"
          className={classes.title}
          align="center"
        >
          Adicionar Membros
        </Typography>
        <Box pt={2} pb={2}>
          <TextField
            id="search"
            label="Procurar usuários"
            variant="outlined"
            className={classes.input}
            autoComplete="off"
            InputLabelProps={{
              className: classes.label,
            }}
            value={variables.query}
            onChange={(e) => setVariables({ ...variables, query: e.target.value })}
          />
          <Button
            className={classes.button}
            onClick={cleanFilter}
          >
            Limpar

          </Button>
        </Box>
        {!variables.query ? (
          <></>
        ) : (

          users && users.length ? (
            users.map((user) => (

              <Box
                display="flex"
                alignItems="center"
                pb={2}
                key={user.id}
              >
                <Avatar
                  className={classes.avatar}
                  key={user.id}
                  value={variables.addUserId}
                  onClick={() => addUser({ variables: { userId: user.id, workspaceId: id } })}
                  src={user.profile.imageUrl ? user.profile.imageUrl
                    : ''}
                />
                <Typography variant="h6" className={classes.typography}>
                  {`${user.firstName} ${user.lastName}`}
                </Typography>
                <Typography variant="h6">
                  {user.email}
                </Typography>
              </Box>
            ))
          ) : (
            <></>
          )
        )}
      </CardContent>
    </Card>
  );
};
