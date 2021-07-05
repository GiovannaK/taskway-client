import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
  headerTitle: {
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
  },
  icon: {
    color: theme.palette.secondary.light,
  },
  edition: {
    color: theme.palette.primary.dark,
    fontWeight: 'lighter',
  },
  priority: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  button: {
    color: theme.palette.secondary.dark,
  },
}));

export default useStyles;
