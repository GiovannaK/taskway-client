import {
  Box, Grid, Toolbar,
} from '@material-ui/core';
import { PaperComponent } from '../components/PaperComponent';
import { TopBar } from '../components/TopBar';
import Layout from '../components/Layout';
import { ProfileInfoCard } from '../components/Profile/ProfileInfoCard';
import { ProfileEditForm } from '../components/Profile/ProfileEditForm';
import { ProfileSection } from '../components/Profile/ProfileSection';

const profile = () => (
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

export default profile;
