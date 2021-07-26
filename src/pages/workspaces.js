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

const WORKSPACES_QUERY = gql`
  query workspaces {
    workspaces{
    id
    title
    createdAt
    users{
      email
      firstName
      profile{
        imageUrl
      }
    }
    owner {
      profile{
        id
        bio
        imageUrl
      }
    }
  }
}
`;

const workspaces = () => {
  const classes = useStyles();
  const {
    error, loading,
    data: { workspaces: allWorkspaces } = {},
  } = useQuery(WORKSPACES_QUERY);

  if (error) {
    toast.error('Não foi possível mostrar seus workspaces');
  }

  return (
    <>
      <PaperComponent>
        <TopBar />
        <Layout title="Taskway | Workspaces">
          {loading ? (<Loading />) : (
            <Box pt={10}>
              <Typography
                align="center"
                variant="h5"
                className={classes.title}
              >
                {allWorkspaces.length ? 'Meus Workspaces' : 'Você ainda não tem workspaces'}
              </Typography>
              <Toolbar />
              <GridComponent>
                {allWorkspaces.length ? (
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
                {allWorkspaces.length ? 'Membro em' : 'Você ainda não é membro em nenhum workspace'}
              </Typography>
              <Toolbar />
              <GridComponent>
                <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={4}>
                  <WorkspaceMemberCard />
                </Grid>
              </GridComponent>
            </Box>
          )}
        </Layout>
      </PaperComponent>
    </>
  );
};

export default withAuth(workspaces);
