import {
  Box, Card, CardContent, CardMedia, Container, Grid, Paper, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import Layout from '../Layout';
import useStyles from './styles';

export const Features = () => {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.paperRoot }} elevation={0} square>
      <Container>
        <Box pt={5}>
          <Typography
            variant="h3"
            align="center"
            className={classes.title}
          >
            Explore
          </Typography>
          <Toolbar />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography align="center" variant="h5" className={classes.cardTitle}>
                    Crie workspaces
                  </Typography>
                  <CardMedia
                    className={classes.cardSvg}
                    image="home_workspace.png"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography align="center" variant="h5" className={classes.cardTitleTwo}>
                    Adicione Membros
                  </Typography>
                  <CardMedia
                    className={classes.cardSvg}
                    image="home_members.png"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography align="center" variant="h5" className={classes.cardTitleThree}>
                    Distribua Tarefas
                  </Typography>
                  <CardMedia
                    className={classes.cardSvg}
                    image="home_tasks.png"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography align="center" variant="h5" className={classes.cardTitleFour}>
                    Manipule Tarefas em tempo real
                  </Typography>
                  <CardMedia
                    className={classes.cardSvg}
                    image="home_realtime.png"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography align="center" variant="h5" className={classes.cardTitle}>
                    adicione diferentes permissões
                  </Typography>
                  <CardMedia
                    className={classes.cardSvg}
                    image="home_permission.png"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography align="center" variant="h5" className={classes.cardTitleTwo}>
                    Defina prazos e prioridades
                  </Typography>
                  <CardMedia
                    className={classes.cardSvg}
                    image="home_priority.png"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Toolbar />
      </Container>
    </Paper>
  );
};
