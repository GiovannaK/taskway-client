import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Icon,
  IconButton,
  Button,
  Tooltip,
  Hidden,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import EventNoteIcon from '@material-ui/icons/EventNote';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './styles';
import { Navbar } from '../Navbar';
import { Loading } from '../Loading';
import { ProfileContext } from '../../context/ProfileContext';
import { HomeDrawer } from '../HomeDrawer';

const LOGOUT = gql`
  mutation userLogout{
    userLogout
  }
`;

export const HomeTopBar = () => {
  const router = useRouter();
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { userProfile, USER_PROFILE } = useContext(ProfileContext);

  const [logoutUser, { loading }] = useMutation(LOGOUT, {
    onError(err) {
      <Loading />;
    },
    onCompleted(data) {
      /* router.push('/login'); */
      window.location.href = '/login';
    },
  });

  if (loading) {
    <Loading />;
  }

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <>
      <AppBar
        position="fixed"
        className={classes.AppBar}
        elevation={0}
      >
        <Box display="flex" className={classes.box}>
          <Toolbar>
            <IconButton
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon fontSize="large" className={classes.fontColors} />
            </IconButton>
            <Toolbar>
              <Typography
                variant="h4"
                color="primary"
                className={`${classes.logo} ${classes.fontColors}`}
              >
                TasKwaY
                <Icon>
                  <EventNoteIcon />
                </Icon>
              </Typography>
            </Toolbar>
          </Toolbar>
          <Hidden smDown>
            <Toolbar>
              <Button
                variant="contained"
                className={classes.loginButton}
                startIcon={<PersonIcon className={classes.buttonIcons} />}
              >
                <Typography variant="h6" className={classes.typographyButtons}>
                  Login
                </Typography>
              </Button>
              {userProfile.user
              && (
              <Tooltip title="Sair">
                <IconButton className={classes.Icons} onClick={handleLogout}>
                  <ExitToAppIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              )}
            </Toolbar>
          </Hidden>
        </Box>
      </AppBar>
      <HomeDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} logoutUser={logoutUser} />
    </>
  );
};
