/* eslint-disable no-dupe-keys */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    background: '#fc5c7d',
    background: '-webkit-linear-gradient(to right, #fc5c7d, #6a82fb)',
    background: 'linear-gradient(to right, #fc5c7d, #6a82fb)',
    [theme.breakpoints.down('xl')]: {
      minHeight: '100vh',
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '100vh',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '80vh',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '80vh',
    },
  },
  title: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
    webkitFontSmoothing: 'antialiased',
  },
  box: {
    [theme.breakpoints.down('xl')]: {
      paddingTop: theme.spacing(20),
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(25),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(25),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(15),
    },
  },
  signUpButton: {
    color: theme.palette.secondary.light,
    borderColor: theme.palette.secondary.light,
    [theme.breakpoints.down('xl')]: {
      padding: '15px 40px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px 30px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10px 10px',
    },
  },
  typographySignUp: {
    fontWeight: 'bold',
  },
  waveSvg: {
    bottom: 0,
    position: 'absolute',
  },
}));

export default useStyles;
