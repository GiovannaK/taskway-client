import {
  Box, Grid, Card,
} from '@material-ui/core';
import React from 'react';
import { PaperComponent } from '../components/PaperComponent';
import { TopBar } from '../components/TopBar';
import useStyles from '../styles/task';
import Layout from '../components/Layout';
import { TaskCard } from '../components/Task/TaskCard';

const task = () => {
  const classes = useStyles();
  return (
    <PaperComponent>
      <TopBar />
      <Layout>
        <Box pt={10}>
          <Grid container align="center" justify="center">
            <Grid item xs={12} sm={12} md={12} lg={10} xl={8}>
              <TaskCard />
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default task;
