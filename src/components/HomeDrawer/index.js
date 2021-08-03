import {
  Drawer,
  IconButton,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  SwipeableDrawer,
} from '@material-ui/core';
import React, { useContext } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import Link from 'next/link';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import useStyles from './styles';
import { ProfileContext } from '../../context/ProfileContext';

export const HomeDrawer = ({ openDrawer, setOpenDrawer, logoutUser }) => {
  const classes = useStyles();
  const { userProfile } = useContext(ProfileContext);
  return (
    <SwipeableDrawer
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      onOpen={() => setOpenDrawer}
    >
      <IconButton
        className={classes.drawerHeader}
        onClick={() => setOpenDrawer(false)}
      >
        <ChevronLeftIcon
          fontSize="large"
          className={classes.chevronIcon}
        />
      </IconButton>
      {!userProfile || !userProfile.user ? (
        <>
          <List>
            <Link href="/register">
              <ListItem button>
                <ListItemIcon>
                  <PersonAddIcon className={classes.listIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    color="primary"
                    className={classes.typography}
                  >
                    Crie uma conta
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link href="/login">
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon className={classes.listIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    color="primary"
                    className={classes.typography}
                  >
                    Login
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      ) : (

        <List className={classes.avatarSection}>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon className={classes.listIcons} />
            </ListItemIcon>
            <ListItemText onClick={logoutUser}>
              <Typography
                variant="h6"
                color="primary"
                className={classes.typography}
              >
                Sair
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      )}
    </SwipeableDrawer>
  );
};
