/* eslint-disable no-nested-ternary */
import { gql, useMutation, useQuery } from '@apollo/client';
import {
  Avatar,
  Box, Card, CardContent, CircularProgress, Grid, Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
import { Loading } from '../../../components/Loading';
import { AddMember } from '../../../components/PageWorkspaceMember/addMember';
import { PaperComponent } from '../../../components/PaperComponent';
import { TabComponent } from '../../../components/TabComponent';
import { TopBar } from '../../../components/TopBar';
import useStyles from '../../../styles/workspaceMembers';
import { USERS_WORKSPACE } from '../../../utils/queries/queryUsersWorkspaces';

const REMOVE_USER_FROM_WORKSPACE = gql`
  mutation removeUserFromWorkspace($workspaceId: ID!, $userId: ID!) {
  removeUserFromWorkspace(workspaceId: $workspaceId, userId: $userId)
}
`;

const workspaceMembers = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const {
    error: errorUserWorkspaces, loading: loadingUserWorkspaces,
    data: { usersWorkspace } = {},
  } = useQuery(USERS_WORKSPACE, {
    variables: {
      id,
    },
  });

  const [removeUser, { loading }] = useMutation(REMOVE_USER_FROM_WORKSPACE, {
    update(_, __) {
      toast.info('Usuário removido com sucesso');
    },
    onError(err) {
      toast.error('Não foi possível remover usuário');
    },
    refetchQueries: [
      {
        query: USERS_WORKSPACE,
        variables: {
          id,
        },
      },
    ],
  });

  if (errorUserWorkspaces) {
    <Loading />;
  }

  return (
    <>
      <PaperComponent>
        <TopBar />
        <Layout>
          <TabComponent />
          <Box pt={15}>
            <Grid container spacing={1} align="center" justify="center">
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card className={classes.card} square>
                  <CardContent>
                    <Typography
                      variant="h5"
                      className={classes.title}
                      align="center"
                    >
                      Membros
                    </Typography>

                    <Box
                      pt={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-evenly"
                      flexWrap="wrap"
                    >
                      {loadingUserWorkspaces ? (
                        <CircularProgress />
                      ) : (
                        usersWorkspace && usersWorkspace.length ? (
                          usersWorkspace.map((user) => (

                            <Box
                              flex="1 0 30%"
                              display="flex"
                              alignItems="center"
                              pb={2}
                              key={user.id}
                            >
                              <Avatar
                                className={classes.avatar}
                                onClick={() => removeUser(
                                  { variables: { userId: user.id, workspaceId: id } },
                                )}
                                src={user.profile.imageUrl ? user.profile.imageUrl
                                  : ''}
                              />
                              <Typography variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
                            </Box>
                          ))
                        ) : (
                          <></>
                        )

                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <AddMember />
              </Grid>
            </Grid>
          </Box>
        </Layout>
      </PaperComponent>
    </>
  );
};

export default workspaceMembers;
