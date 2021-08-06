/* eslint-disable no-useless-return */
import { gql, useMutation } from '@apollo/client';
import {
  Button,
  Typography,
  Box,
  CardContent, Grid, Hidden, Card, Toolbar, TextField,
} from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import { LoginPaper } from '../../components/LoginPaper';
import useStyles from '../../styles/resetPassword';
import { resetPasswordValidation } from '../../utils/resetPasswordValidation';

const RESET_PASSWORD = gql`
  mutation resetPassword($passwordResetToken: String!, $password: String!){
    userResetPassword(passwordResetToken: $passwordResetToken, password: $password){
      id
    }
  }
`;

const resetPassword = () => {
  const classes = useStyles();
  const router = useRouter();
  const { passwordResetToken } = router.query;
  const [variables, setVariables] = useState({
    password: '',
    confirmPassword: '',
  });

  const [resetPass, { loading }] = useMutation(RESET_PASSWORD, {
    update(_, __) {
      router.push('/login');
      toast.info('Senha redefinida com sucesso');
    },
    onError(err) {
      toast.error('Não foi possível redefinir a senha');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasInvalidFields = resetPasswordValidation(
      variables.password, variables.confirmPassword,
    );

    if (hasInvalidFields) {
      return;
    }

    resetPass({
      variables: {
        password: variables.password,
        passwordResetToken,
      },
    });
  };
  return (
    <LoginPaper>
      <img src="../animated_wave.svg" alt="waves" className={classes.images} />
      <Layout title="Taskway | Alterar senha">
        <Box pt={5}>
          <Grid container align="center" justify="center">
            <Hidden lgDown>
              <Grid item xs={12} sm={12} md={4} lg={6} xl={6}>
                <Card className={classes.card} square>
                  <CardContent>
                    <Toolbar />
                    <img src="../reset.png" alt="svg alterar a senha" className={classes.svg} />
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
                    Alterar Senha
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      required
                      id="password"
                      label="Senha"
                      type="password"
                      placeholder="Sua nova senha..."
                      variant="outlined"
                      className={classes.input}
                      InputLabelProps={{
                        className: classes.label,
                      }}
                      value={variables.password}
                      onChange={(e) => setVariables({ ...variables, password: e.target.value })}
                    />
                    <TextField
                      required
                      id="password2"
                      label="Confirme a nova senha"
                      type="password"
                      placeholder="Sua nova senha..."
                      variant="outlined"
                      className={classes.input}
                      InputLabelProps={{
                        className: classes.label,
                      }}
                      value={variables.confirmPassword}
                      onChange={(e) => setVariables({
                        ...variables,
                        confirmPassword: e.target.value,
                      })}
                    />
                    <Button
                      type="submit"
                      className={classes.button}
                      variant="outlined"
                      disabled={loading}
                    >
                      <Typography variant="h6">
                        {loading ? 'Enviando...' : 'Alterar'}
                      </Typography>
                    </Button>
                    <Hidden smDown>
                      <Toolbar />
                      <img src="../task.svg" alt="task" className={classes.svgButton} />
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

export default resetPassword;
