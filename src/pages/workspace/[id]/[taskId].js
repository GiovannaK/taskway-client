/* eslint-disable no-nested-ternary */
import {
  Box, Grid, Toolbar,
} from '@material-ui/core';
import React from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { PaperComponent } from '../../../components/PaperComponent';
import { TopBar } from '../../../components/TopBar';
import useStyles from '../../../styles/task';
import Layout from '../../../components/Layout';
import { TaskCard } from '../../../components/Task/TaskCard';
import { CommentsCard } from '../../../components/Task/CommentsCard';
import { SpeedComponent } from '../../../components/Task/SpeedComponent';
import { Loading } from '../../../components/Loading';
import withAuthAndPermission from '../../../utils/withAuthAndPermissions';
/* import { QUERY_TASKS_BY_ID } from '../../../utils/queries/queryTasksById'; */

export const QUERY_TASKS_BY_ID = gql`
  query taskById($workspaceId: ID!, $id: ID!){
    taskById(workspaceId: $workspaceId, id: $id){
      title
      link
      file
      description
      maxDate
      progress
      priority
      assignTo
      createdAt
      tasksUsers{
        firstName
        lastName
        profile {
          imageUrl
        }
      }
    }
  }
`;

const task = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id, taskId } = router.query;

  const {
    error, loading,
    data: { taskById: taskDetail } = {},
  } = useQuery(QUERY_TASKS_BY_ID, {
    variables: {
      workspaceId: id,
      id: taskId,
    },
  });

  if (error) {
    <Loading />;
  }

  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Taskway | Tarefa">
        <Box pt={10}>
          {loading ? (
            <Loading />
          ) : (
            taskDetail ? (
              <>
                <Grid container align="center" justify="center">
                  <Grid item xs={12} sm={12} md={12} lg={10} xl={8}>
                    <TaskCard taskDetail={taskDetail} />
                    <Toolbar />
                    <CommentsCard />
                    <Toolbar />
                  </Grid>
                </Grid>
                <SpeedComponent
                  id={id}
                  taskId={taskId}
                  taskDetail={taskDetail}
                  QUERY_TASKS_BY_ID={QUERY_TASKS_BY_ID}
                />
              </>
            )
              : (<Loading />)

          )}
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default withAuthAndPermission(task);
