/* eslint-disable no-nested-ternary */
import { gql, useQuery } from '@apollo/client';
import {
  Avatar, Box, Button, Card, CardContent, IconButton, TextField, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
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

export const AddMember = () => {
  const classes = useStyles();
  const [variables, setVariables] = useState({
    query: '',
    addUserId: '',
  });

  const cleanFilter = () => {
    setVariables({
      ...variables, query: '',
    });
  };

  console.log(variables.addUserId);

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
                  onClick={(e) => setVariables({ ...variables, addUserId: user.id })}
                  src={user.profile.imageUrl ? user.profile.imageUrl
                    : ''}
                />
                <Typography variant="h6" className={classes.typography}>
                  {`${user.firstName} ${user.lastName}`}
                  Allan A
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
