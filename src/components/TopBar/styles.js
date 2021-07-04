import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    width: '100%',
    background: theme.palette.primary.light,
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
