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
import { ProfileSection } from '../components/Profile/ProfileSection';

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
              <ProfileSection />
            </Grid>
          </Box>
        </Layout>
      </PaperComponent>
    </>
  );
};

export default profile;
