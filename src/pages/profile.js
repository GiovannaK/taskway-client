import {
  Box, Grid, Toolbar, Card, CardContent,
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  Icon,
  Button,
} from '@material-ui/core';
import React from 'react';
import { PaperComponent } from '../components/PaperComponent';
import { TopBar } from '../components/TopBar';
import useStyles from '../styles/profile';
import Layout from '../components/Layout';
import { ProfileInfoCard } from '../components/Profile/ProfileInfoCard';
import { ProfileEditForm } from '../components/Profile/ProfileEditForm';

const profile = () => {
  const classes = useStyles();
  return (
    <>
      <PaperComponent>
        <TopBar />
        <Layout>
          <Box pt={10}>
            <ProfileInfoCard />
            <Toolbar />
            <Grid container spacing={1}>
              <ProfileEditForm />
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card variant="outlined">
                  <CardContent>
                    dfokgj
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Layout>
      </PaperComponent>
    </>
  );
};

export default profile;
