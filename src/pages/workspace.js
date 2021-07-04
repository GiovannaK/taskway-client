import {
  Box, Grid, Typography, Toolbar, Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../styles/workspaceDetail';
import { PaperComponent } from '../components/PaperComponent';
import { TopBar } from '../components/TopBar';
import Layout from '../components/Layout';
import { Tasks } from '../components/Workspace/Tasks';

const workspace = () => {
  const classes = useStyles();
  return (
    <PaperComponent>
      <TopBar />
      <Layout>
        <Box pt={10}>
          <Typography variant="h5" align="center" className={classes.title}>
            Workspace Title
          </Typography>
          <Toolbar />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
              <Tasks />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
              <Tasks />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
              <Tasks />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
              <Tasks />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
              <Tasks />
            </Grid>
          </Grid>
          <Fab className={classes.fab}>
            <AddIcon />
          </Fab>
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default workspace;
