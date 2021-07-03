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
import React, { useState } from 'react';
import EventNoteIcon from '@material-ui/icons/EventNote';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from './styles';
import { Navbar } from '../Navbar';

export const TopBar = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
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
          <Hidden mdDown>
            <Toolbar>
              <Tooltip title="Sair">
                <IconButton className={classes.Icons}>
                  <ExitToAppIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </Hidden>
        </Box>
      </AppBar>
      <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};
