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
} from '@material-ui/core';
import React, { useContext } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from 'next/link';
import useStyles from './styles';
import { ProfileContext } from '../../context/ProfileContext';

export const HomeDrawer = ({ openDrawer, setOpenDrawer, logoutUser }) => {
  const classes = useStyles();
  const { userProfile } = useContext(ProfileContext);
  return (
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      variant="persistent"
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
      <List>
        <Link href="/workspaces">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon className={classes.listIcons} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="h6"
                color="primary"
                className={classes.typography}
              >
                Workspaces
              </Typography>
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon className={classes.listIcons} />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="h6"
              color="primary"
              className={classes.typography}
            >
              Configurações
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
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
      {userProfile && (

      <List className={classes.avatarSection}>
        <Link href="/profile">
          <ListItem button>
            <ListItemIcon>
              <Avatar src={!userProfile.imageUrl ? '' : userProfile.imageUrl} />
            </ListItemIcon>
            <ListItemText>
              {!userProfile.user ? (
                <></>
              ) : (

                <Typography
                  variant="h6"
                  color="primary"
                >
                  {`${!userProfile.user.firstName ? '' : userProfile.user.firstName} ${!userProfile.user.lastName ? '' : userProfile.user.lastName}`}
                </Typography>
              )}
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      )}
    </Drawer>
  );
};
