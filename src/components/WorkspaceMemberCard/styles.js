import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  headerTitle: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 1.2,
  },
  typography: {
    color: theme.palette.primary.dark,
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
