import { makeStyles } from '@material-ui/core';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'rgba(0,0,0,0.6)',
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
  signUp: {
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: theme.palette.secondary.light,
    transition: '0.3s ease-in',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
