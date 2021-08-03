/* eslint-disable no-dupe-keys */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    background: '#141e30',
    background: '-webkit-linear-gradient(to right, #141e30, #243b55)',
    background: 'linear-gradient(to right, #141e30, #243b55)',

    [theme.breakpoints.down('xl')]: {
      minHeight: '30vh',
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '30vh',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '30vh',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '30vh',
    },
  },
  title: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
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
  textTypography: {
    color: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    textTransform: 'uppercase',
    fontSize: '1rem',
    transition: '0.5s ease-in',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  },
  cardTitleFour: {
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.light,
  },
  socialLogo: {
    [theme.breakpoints.down('xl')]: {
      maxWidth: '3%',
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '5%',
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '5%',
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '5%',
      marginRight: theme.spacing(1),
    },
  },
}));

export default useStyles;
