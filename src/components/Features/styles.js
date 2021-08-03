/* eslint-disable no-dupe-keys */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    background: '#333333',
    [theme.breakpoints.down('xl')]: {
      minHeight: '50vh',
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '50vh',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '50vh',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '50vh',
    },
  },
  title: {
    color: theme.palette.secondary.dark,
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
  card: {
    background: theme.palette.secondary.main,
    maxHeight: 280,
  },
  cardTitle: {
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  cardTitleTwo: {
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  cardTitleThree: {
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
  },
  cardSvg: {
    height: 200,
  },
  laptop: {
    width: '100%',
  },
  textTypography: {
    color: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  cardTitleFour: {
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.light,
  },
}));

export default useStyles;
