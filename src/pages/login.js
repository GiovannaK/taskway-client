import {
  Hidden,
  Typography,
  Box, Card, CardContent, Grid, TextField, Toolbar, Button,
} from '@material-ui/core';
import Cookie from 'js-cookie';

import React, { useState } from 'react';
import Link from 'next/link';
import { gql, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { LoginPaper } from '../components/LoginPaper';
import useStyles from '../styles/login';
import { loginValidation } from '../utils/loginValidation';

const LOGIN_USER = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      id
      token
    }
  }
`;

const login = () => {
  const classes = useStyles();
  const router = useRouter();
  const [variables, setVariables] = useState({
    email: '',
    password: '',
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, __) {
      Cookie.set('isLogged', true, {
        expires: 7,
      });
      router.push('/workspaces');
    },
    onError(err) {
      toast.error('Não foi possível fazer o login do usuário');
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const hasInvalidFields = loginValidation(
      variables.email,
      variables.password,
    );

    if (hasInvalidFields) {
      return;
    }

    loginUser({ variables });
  };

  return (
    <LoginPaper>
      <img src="animated_wave.svg" alt="waves" className={classes.images} />
      <Layout title="Taskway | Login">
        <Box pt={5}>
          <Grid container align="center" justify="center">
            <Hidden lgDown>
              <Grid item xs={12} sm={12} md={4} lg={6} xl={6}>
                <Card className={classes.card} square>
                  <CardContent>
                    <Toolbar />
                    <img src="done.png" alt="svg login" className={classes.svg} />
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
                    Login
                  </Typography>
                  <form onSubmit={onSubmit}>
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
                        {loading ? 'Carregando...' : 'Login'}
                      </Typography>
                    </Button>
                    <Hidden lgDown>
                      <Toolbar />
                      <img src="task.svg" alt="task" className={classes.svgButton} />
                    </Hidden>
                  </form>
                  <Toolbar />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Link href="/forgotPassword">
                        <Button className={classes.buttons}>
                          Esqueceu a senha?
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Link href="/register">
                        <Button className={classes.buttons}>
                          Não uma tem conta?
                        </Button>
                      </Link>
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

export default login;
