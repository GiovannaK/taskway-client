import {
  Typography, Box, Toolbar, Grid,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import { GridComponent } from '../components/GridComponent';
import Layout from '../components/Layout';
import { PaperComponent } from '../components/PaperComponent';
import { TopBar } from '../components/TopBar';
import { WorkspaceCard } from '../components/WorkspaceCard';
import useStyles from '../styles/workspace';
import withAuth from '../utils/withAuth';

const workspaces = () => {
  const classes = useStyles();
  return (
    <>
      <PaperComponent>
        <TopBar />
        <Layout title="Taskway | Workspaces">
          <Box pt={10}>
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
      </PaperComponent>
    </>
  );
};

export default withAuth(workspaces);
