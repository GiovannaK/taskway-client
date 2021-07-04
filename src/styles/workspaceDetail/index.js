import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    color: theme.palette.primary.dark,
  },
  headerTitle: {
    textTransform: 'uppercase',
    color: theme.palette.secondary.dark,
    letterSpacing: 1.2,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    color: theme.palette.secondary.light,
  },
  typography: {
    color: theme.palette.primary.main,
  },
  labelChip: {
    color: theme.palette.secondary.dark,
  },
}));

export default useStyles;
