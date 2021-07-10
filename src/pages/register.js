/* eslint-disable no-useless-return */
import { gql, useMutation } from '@apollo/client';
import {
  Box, Button, Card, CardContent, Grid, Hidden, TextField, Toolbar, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import { LoginPaper } from '../components/LoginPaper';
import useStyles from '../styles/register';
import { registerValidation } from '../utils/registerValidation';

const REGISTER_USER = gql`
  mutation userRegister($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    userRegister(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
    }
  }
`;

const register = () => {
  const classes = useStyles();
  const [variables, setVariables] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, __) {
      toast.info(`Um e-mail de ativação foi enviado para ${variables.email}`);
    },
    onError(err) {
      toast.error('Não foi possível registrar usuário');
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const invalid = registerValidation(
      variables.firstName,
      variables.lastName,
      variables.email,
      variables.password,
    );

    if (invalid) {
      return;
    }

    registerUser({ variables });
  };

  return (
    <LoginPaper>
      <img src="animated_wave.svg" alt="blue waves" className={classes.images} />
      <Layout title="Taskway | Registre-se">
        <Box pt={5}>
          <Grid container align="center" justify="center">
            <Hidden mdDown>
              <Grid item xs={12} sm={12} md={4} lg={6} xl={6}>
                <Card className={classes.card} square>
                  <CardContent>
                    <Toolbar />
                    <img src="register.png" alt="svg login" className={classes.svg} />
                  </CardContent>
                </Card>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
              <Card className={classes.card} square>
                <CardContent>
                  <Toolbar />
                  <Typography
                    variant="h3"
                    className={classes.title}
                  >
                    Registre-se
                  </Typography>
                  <form onSubmit={onSubmit}>
                    <TextField
                      required
                      id="firstName"
                      label="Primeiro Nome"
                      type="text"
                      placeholder="Seu primeiro nome..."
                      variant="outlined"
                      className={classes.input}
                      InputLabelProps={{
                        className: classes.label,
                      }}
                      value={variables.firstName}
                      onChange={(e) => setVariables({ ...variables, firstName: e.target.value })}
                    />
                    <TextField
                      required
                      id="lastName"
                      label="Último Nome"
                      type="text"
                      placeholder="Seu último nome..."
                      variant="outlined"
                      className={classes.input}
                      InputLabelProps={{
                        className: classes.label,
                      }}
                      value={variables.lastName}
                      onChange={(e) => setVariables({ ...variables, lastName: e.target.value })}
                    />
                    <TextField
                      required
                      id="email"
                      label="E-mail"
                      type="email"
                      placeholder="Seu e-mail..."
                      variant="outlined"
                      className={classes.input}
                      InputLabelProps={{
                        className: classes.label,
                      }}
                      value={variables.email}
                      onChange={(e) => setVariables({ ...variables, email: e.target.value })}
                    />
                    <TextField
                      required
                      id="password"
                      type="password"
                      label="Senha"
                      placeholder="Sua senha..."
                      variant="outlined"
                      className={classes.input}
                      InputLabelProps={{
                        className: classes.label,
                      }}
                      value={variables.password}
                      onChange={(e) => setVariables({ ...variables, password: e.target.value })}
                    />
                    <Button
                      type="submit"
                      className={classes.button}
                      variant="outlined"
                      disabled={loading}
                    >
                      <Typography variant="h6">
                        {loading ? '...Enviando' : 'Registrar'}
                      </Typography>
                    </Button>
                  </form>
                  <Toolbar />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Button className={classes.buttons}>
                        Esqueceu a senha?
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Button className={classes.buttons}>
                        Já tem conta?
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </LoginPaper>
  );
};

export default register;
