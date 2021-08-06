/* eslint-disable import/prefer-default-export */
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
import Cookie from 'js-cookie';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import useStyles from './styles';
import { Navbar } from '../Navbar';
import { Loading } from '../Loading';
import { ProfileContext } from '../../context/ProfileContext';

const LOGOUT = gql`
  mutation userLogout{
    userLogout
  }
`;

export const TopBar = () => {
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
      Cookie.remove('isLogged');
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
          {userProfile.user

          && (
          <Hidden mdDown>
            <Toolbar>
              <Tooltip title="Sair">
                <IconButton className={classes.Icons} onClick={handleLogout}>
                  <ExitToAppIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </Hidden>
          )}
        </Box>
      </AppBar>
      <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} logoutUser={logoutUser} />
    </>
  );
};
