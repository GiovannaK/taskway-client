import { makeStyles } from '@material-ui/core';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevronIcon: {
    color: theme.palette.primary.main,
    width: '100%',
  },
  typography: {
    textTransform: 'uppercase',
    letterSpacing: 1.3,
  },
  listIcons: {
    color: theme.palette.secondary.light,
  },
  avatarSection: {
    position: 'fixed',
    bottom: 0,
    width: drawerWidth,
  },
}));

export default useStyles;
