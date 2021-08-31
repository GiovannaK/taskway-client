import {
  Box, Grid, Toolbar,
} from '@material-ui/core';
import { useContext } from 'react';
import { PaperComponent } from '../components/PaperComponent';
import { TopBar } from '../components/TopBar';
import Layout from '../components/Layout';
import { ProfileInfoCard } from '../components/Profile/ProfileInfoCard';
import { ProfileEditForm } from '../components/Profile/ProfileEditForm';
import { ProfileSection } from '../components/Profile/ProfileSection';
import { ProfileContext } from '../context/ProfileContext';
import withAuth from '../utils/withAuth';

const profile = () => {
  const { userProfile } = useContext(ProfileContext);
  return (
    <>
      {userProfile

      && (
      <PaperComponent>
        <TopBar />
        <Layout>
          <Box pt={10}>
            <ProfileInfoCard userProfile={userProfile} />
            <Toolbar />
            <Grid container spacing={1}>
              <ProfileEditForm />
            </Grid>
          </Box>
        </Layout>
      </PaperComponent>
      )}
    </>
  );
};

export default withAuth(profile);
