import {
  Typography, Box, Toolbar, Grid, Hidden,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import { gql, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { GridComponent } from '../components/GridComponent';
import Layout from '../components/Layout';
import { PaperComponent } from '../components/PaperComponent';
import { TopBar } from '../components/TopBar';
import { WorkspaceCard } from '../components/WorkspaceCard';
import useStyles from '../styles/workspace';
import withAuth from '../utils/withAuth';
import { Loading } from '../components/Loading';
import { WorkspaceMemberCard } from '../components/WorkspaceMemberCard';
import { QUERY_WORKSPACE_MEMBER } from '../utils/queries/queryWorkspaceMember';
import { AddWorkspace } from '../components/AddWorkspace';
import { WORKSPACES_QUERY } from '../utils/queries/workspacesQuery';

const workspaces = () => {
  const classes = useStyles();
  const {
    error, loading,
    data: { workspaces: allWorkspaces } = {},
  } = useQuery(WORKSPACES_QUERY);

  const {
    error: errorWorkspaceMember, loading: loadingWorkspaceMember,
    data: { workspaceMember } = {},
  } = useQuery(QUERY_WORKSPACE_MEMBER, {
    pollInterval: 1000,
  });

  if (error) {
    toast.error('Não foi possível mostrar seus workspaces');
  }

  if (errorWorkspaceMember) {
    toast.error('Não foi possível mostrar os workspaces que você é membro');
  }

  return (
    <>
      <PaperComponent>
        <TopBar />
        <Layout title="Taskway | Workspaces">
          {loading || loadingWorkspaceMember ? (<Loading />) : (
            <Box pt={10}>
              <Typography
                align="center"
                variant="h5"
                className={classes.title}
              >
                {allWorkspaces && allWorkspaces.length ? 'Meus Workspaces' : 'Você ainda não tem workspaces'}
              </Typography>
              <Toolbar />
              <GridComponent>
                {allWorkspaces && allWorkspaces.length ? (
                  allWorkspaces.map((workspace) => (
                    <Grid
                      item
                      align="center"
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      xl={4}
                      key={workspace.id}
                    >
                      <WorkspaceCard workspace={workspace} />
                    </Grid>
                  ))

                ) : (
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img
                      src="noWorkspace.svg"
                      alt="Você não tem workspaces"
                      className={classes.svg}
                    />
                  </Grid>
                )}
              </GridComponent>
              <Toolbar />
              <Typography
                align="center"
                variant="h5"
                className={classes.title}
              >
                {workspaceMember && workspaceMember.length ? 'Membro em' : 'Nenhum convite'}
              </Typography>
              <Toolbar />
              <GridComponent>
                {workspaceMember && workspaceMember.length ? (
                  workspaceMember.map((workspace) => (

                    <Grid key={workspace.id} item align="center" xs={12} sm={6} md={6} lg={4} xl={4}>
                      <WorkspaceMemberCard key={workspace.id} workspace={workspace} />
                    </Grid>
                  ))
                ) : (
                  <>
                    <img
                      className={classes.svg}
                      src="shared.svg"
                      alt="workspace svg"
                    />
                  </>
                )}
              </GridComponent>
            </Box>
          )}
          <AddWorkspace />
        </Layout>
      </PaperComponent>
    </>
  );
};

export default workspaces;
