import {
  Button,
  Typography,
  Box,
  CardContent, Grid, Hidden, Card, Toolbar, TextField,
} from '@material-ui/core';

import React, { useState } from 'react';
import Link from 'next/link';
import { gql } from '@apollo/client/core';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import Layout from '../components/Layout';
import { LoginPaper } from '../components/LoginPaper';
import useStyles from '../styles/forgotPassword';
import { forgotPasswordValidation } from '../utils/forgotPasswordValidation';

const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!){
    userForgotPassword(email: $email){
      id
    }
  }
`;

const forgotPassword = () => {
  const classes = useStyles();
  const [variables, setVariables] = useState({
    email: '',
  });

  const [forgotPass, { loading }] = useMutation(FORGOT_PASSWORD, {
    update(_, __) {
      toast.info(`Um e-mail para redefinir a senha foi enviado para ${variables.email}`);
    },
    onError(err) {
      toast.error('Não foi possível enviar e-mail para redefinir a senha, Você já tem uma conta?');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasInvalidFields = forgotPasswordValidation(variables.email);

    if (hasInvalidFields) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    forgotPass({ variables });
  };

  return (
    <LoginPaper>
      <img src="animated_wave.svg" alt="waves" className={classes.images} />
      <Layout title="Taskway | Esqueci a Senha">
        <Box pt={5}>
          <Grid container align="center" justify="center">
            <Hidden mdDown>
              <Grid item xs={12} sm={12} md={4} lg={6} xl={6}>
                <Card className={classes.card} square>
                  <CardContent>
                    <Toolbar />
                    <img src="mail.svg" alt="svg esqueci a senha" className={classes.svg} />
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
                    Esqueci a senha
                  </Typography>
                  <form onSubmit={handleSubmit}>
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
                    <Button
                      type="submit"
                      className={classes.button}
                      variant="outlined"
                      disabled={loading}
                    >
                      <Typography variant="h6">
                        {loading ? 'Enviando...' : 'Enviar'}
                      </Typography>
                    </Button>
                    <Hidden smDown>
                      <Toolbar />
                      <img src="task.svg" alt="task" className={classes.svgButton} />
                    </Hidden>
                  </form>
                  <Toolbar />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Link href="/login">
                        <Button className={classes.buttons}>
                          Lembrei minha senha
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

export default forgotPassword;
