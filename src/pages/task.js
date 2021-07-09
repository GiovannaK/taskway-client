import {
  Box, Grid, Toolbar,
} from '@material-ui/core';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { PaperComponent } from '../components/PaperComponent';
import { TopBar } from '../components/TopBar';
import useStyles from '../styles/task';
import Layout from '../components/Layout';
import { TaskCard } from '../components/Task/TaskCard';
import { CommentsCard } from '../components/Task/CommentsCard';
import { SpeedComponent } from '../components/Task/SpeedComponent';

const task = () => {
  const classes = useStyles();
  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Taskway | Tarefa">
        <Box pt={10}>
          <Grid container align="center" justify="center">
            <Grid item xs={12} sm={12} md={12} lg={10} xl={8}>
              <TaskCard />
              <Toolbar />
              <CommentsCard />
              <Toolbar />
            </Grid>
          </Grid>
        </Box>
        <SpeedComponent />
      </Layout>
    </PaperComponent>
  );
};

export default task;
