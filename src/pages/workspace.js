import {
  Typography, Box, Toolbar, Grid, CardHeader,
  Hidden,
} from '@material-ui/core';
import React from 'react';
import { GridComponent } from '../components/GridComponent';
import Layout from '../components/Layout';
import { TopBar } from '../components/TopBar';
import { WorkspaceCard } from '../components/WorkspaceCard';
import useStyles from '../styles/workspace';

const workspace = () => {
  const classes = useStyles();
  return (
    <>
      <TopBar />
      <Layout>
        <Hidden mdDown>
          <img src="/wave.svg" alt="waves" />
        </Hidden>
        <Box className={classes.box}>
          <Typography
            align="center"
            variant="h5"
            className={classes.title}
          >
            Meus Workspaces
          </Typography>
          <Toolbar />
          <GridComponent>
            <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={4}>
              <WorkspaceCard />
            </Grid>
            <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={4}>
              <WorkspaceCard />
            </Grid>
            <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={4}>
              <WorkspaceCard />
            </Grid>
          </GridComponent>
          <Toolbar />
          <Typography
            align="center"
            variant="h5"
            className={classes.title}
          >
            Membro em
          </Typography>
          <Toolbar />
          <GridComponent>
            <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={4}>
              <WorkspaceCard />
            </Grid>
            <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={4}>
              <WorkspaceCard />
            </Grid>
          </GridComponent>
        </Box>
      </Layout>
    </>
  );
};

export default workspace;
