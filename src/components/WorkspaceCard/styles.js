import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  headerTitle: {
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 1.2,
  },
  typography: {
    color: theme.palette.secondary.light,
  },
}));

export default useStyles;
