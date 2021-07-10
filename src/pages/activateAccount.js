import {
  Button,
  Typography,
  Box,
  CardContent, Grid, Hidden, Card, Toolbar, TextField,
} from '@material-ui/core';

import React from 'react';
import Layout from '../components/Layout';
import { LoginPaper } from '../components/LoginPaper';
import useStyles from '../styles/activateAccount';

const activateAccount = () => {
  const classes = useStyles();
  return (
    <LoginPaper>
      <img src="animated_wave.svg" alt="waves" className={classes.images} />
      <Layout title="Taskway | Ativar conta">
        <Box pt={5}>
          <Grid container align="center" justify="center">
            <Hidden mdDown>
              <Grid item xs={12} sm={12} md={4} lg={6} xl={6}>
                <Card className={classes.card} square>
                  <CardContent>
                    <Toolbar />
                    <img src="confirm.svg" alt="svg confirmar a senha" className={classes.svg} />
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
                    Ativar minha conta
                  </Typography>
                  <form>
                    <Button
                      type="submit"
                      className={classes.button}
                      variant="outlined"
                    >
                      <Typography variant="h6">
                        Ativar
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
                      <Button className={classes.buttons}>
                        Já tenho uma conta
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Button className={classes.buttons}>
                        Não uma tem conta?
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

export default activateAccount;
