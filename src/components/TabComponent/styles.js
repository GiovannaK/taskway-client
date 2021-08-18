import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('lg')]: {
      top: '6.6vh',
    },
    [theme.breakpoints.down('md')]: {
      top: '4.6vh',
    },
    [theme.breakpoints.down('sm')]: {
      top: '6vh',
    },
    [theme.breakpoints.down('xs')]: {
      top: '8.1vh',
    },
    background: theme.palette.secondary.main,
  },
  tab: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
