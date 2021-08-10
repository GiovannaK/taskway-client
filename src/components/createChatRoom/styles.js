import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.dark,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
  },
  button: {
    width: '100%',
    color: theme.palette.secondary.dark,
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: '100%',
  },
}));

export default useStyles;
