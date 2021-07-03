/* eslint-disable react/self-closing-comp */
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
import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from './styles';

export const Navbar = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();
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
          <ListItemText>
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
      <List className={classes.avatarSection}>
        <ListItem button>
          <ListItemIcon>
            <Avatar>
              <DashboardIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="h6"
              color="primary"
            >
              Username User
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
