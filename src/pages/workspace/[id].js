import {
  Box, Grid, Typography, Toolbar, Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import useStyles from '../../styles/workspaceDetail';
import { PaperComponent } from '../../components/PaperComponent';
import { TopBar } from '../../components/TopBar';
import Layout from '../../components/Layout';
import { Tasks } from '../../components/Workspace/Tasks';
import { Loading } from '../../components/Loading';
import withAuth from '../../utils/withAuth';

const QUERY_TASKS = gql`
  query tasks($workspaceId: ID!){
    tasks(workspaceId: $workspaceId){
      title
      workspaceId
      id
      link
      file
      description
      maxDate
      progress
      priority
      assignTo
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

const workspace = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

  const {
    data: { tasks } = {},
    error, loading,
  } = useQuery(QUERY_TASKS, {
    variables: {
      workspaceId: id,
    },
  });

  if (error) {
    <Loading />;
  }

  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Taskway | Workspace">
        {loading ? (<Loading />) : (
          <Box pt={10}>
            <Grid container spacing={3} align="center" justify="center">
              {tasks && !tasks.length ? (
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.svgGrid}>
                  <img src="../noTasks.svg" alt="svg sem tarefas" className={classes.svg} />
                  <Toolbar />
                  <Typography
                    variant="h5"
                    className={classes.title}
                  >
                    Você ainda não criou tarefas

                  </Typography>
                </Grid>
              ) : (

                tasks && tasks.map((task) => (
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={task.id}>
                    <Tasks task={task} />
                  </Grid>
                ))
              )}
            </Grid>
            <Link href={`${id}/createTask`}>
              <Fab className={classes.fab}>
                <AddIcon />
              </Fab>
            </Link>
          </Box>
        )}
      </Layout>
    </PaperComponent>
  );
};

export default withAuth(workspace);
