import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    width: '100%',
    background: 'transparent',
  },
  ActiveAppBar: {
    width: '100%',
    background: 'rgba(0,0,0,0.7)',
  },
  logo: {
    fontWeight: 'bold',
  },
  fontColors: {
    color: theme.palette.secondary.main,
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
  box: {
    justifyContent: 'space-between',
  },
  Icons: {
    color: theme.palette.primary.main,
  },
  loginButton: {
    padding: '10px 40px 10px 40px',
    borderRadius: 'none',
    background: theme.palette.secondary.light,
    transition: '0.5s ease-in',
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
  buttonIcons: {
    color: theme.palette.secondary.main,
  },

  typographyButtons: {
    color: theme.palette.secondary.main,
  },
}));

export default useStyles;
