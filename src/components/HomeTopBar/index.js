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
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import useStyles from './styles';
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
  const [openDrawer, setOpenDrawer] = useState(false);
  const [topBar, setTopBar] = useState(false);
  const classes = useStyles();
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

  const handleTopBar = () => {
    if (window.scrollY >= 80) {
      setTopBar(true);
    } else {
      setTopBar(false);
    }
  };

  if (process.browser) {
    window.addEventListener('scroll', handleTopBar);
  }

  return (
    <>
      <AppBar
        position="fixed"
        className={topBar ? classes.ActiveAppBar : classes.AppBar}
        elevation={0}
      >
        <Box display="flex" className={classes.box}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon fontSize="large" className={classes.fontColors} />
              </IconButton>
            </Hidden>
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
              <LinkScroll duration={1000} smooth to="account" className={classes.signUp}>
                Crie uma conta
              </LinkScroll>
              <LinkScroll duration={1000} smooth to="explore" className={classes.signUp}>
                Explore
              </LinkScroll>
              <LinkScroll duration={1000} smooth to="follow" className={classes.signUp}>
                Siga-nos
              </LinkScroll>
              {!userProfile || !userProfile.user ? (

                <Link href="/login">
                  <Button
                    variant="contained"
                    className={classes.loginButton}
                    startIcon={<PersonIcon className={classes.buttonIcons} />}
                  >
                    <Typography variant="h6" className={classes.typographyButtons}>
                      Login
                    </Typography>
                  </Button>
                </Link>
              ) : (

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
