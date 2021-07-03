import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    width: '100%',
    minHeight: '7vh',
    background: theme.palette.primary.light,
    zIndex: 10,
  },
  logo: {
    fontWeight: 'bold',
  },
  fontColors: {
    color: theme.palette.primary.main,
  },

  box: {
    justifyContent: 'space-between',
  },
  Icons: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
