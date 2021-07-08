import {
  Box, Button, Card, CardContent, Grid, Hidden, TextField, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import { LoginPaper } from '../components/LoginPaper';
import useStyles from '../styles/register';

const register = () => {
  const classes = useStyles();
  return (
    <LoginPaper>
      <img src="animated_wave.svg" alt="blue waves" className={classes.images} />
      <Layout>
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
                  <form>
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
                    />
                    <Button
                      type="submit"
                      className={classes.button}
                      variant="outlined"
                    >
                      <Typography variant="h6">
                        Login
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
