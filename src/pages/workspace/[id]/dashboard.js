/* eslint-disable react/jsx-curly-brace-presence */
import { gql, useQuery } from '@apollo/client';
import {
  Box, CardContent, Card, Grid, Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import {
  Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import Layout from '../../../components/Layout';
import { Loading } from '../../../components/Loading';
import { PaperComponent } from '../../../components/PaperComponent';
import { TabComponent } from '../../../components/TabComponent';
import { TopBar } from '../../../components/TopBar';
import useStyles from '../../../styles/dashboard';
import withAuthAndIsOwner from '../../../utils/withAuthAndIsOwner';

const TASK_SITUATION = gql`
  query tasksSituation($workspaceId: ID!){
  tasksSituation(workspaceId: $workspaceId){
    progress
    count
  }
}
`;

const dashboard = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const {
    error, loading,
    data: { tasksSituation } = {},
  } = useQuery(TASK_SITUATION, {
    variables: {
      workspaceId: id,
    },
  });

  if (error || loading) {
    <Loading />;
  }
  return (
    <PaperComponent>
      <TopBar />
      <Layout>
        <TabComponent />
        <Box pt={12}>
          <Grid container align="center" justify="center" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card className={classes.card} square>
                <CardContent>
                  <Typography
                    variant="h6"
                    className={classes.title}
                  >
                    Quantidade de Tarefas por progresso

                  </Typography>
                  <div style={{ flex: 1, width: '100%', overflow: 'hidden' }}>

                    <ResponsiveContainer
                      width="100%"
                      height={600}
                    >
                      <BarChart
                        data={tasksSituation}
                        width="100%"
                        height="100%"
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="progress" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default withAuthAndIsOwner(dashboard);
