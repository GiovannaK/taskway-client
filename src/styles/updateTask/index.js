import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.palette.secondary.light,
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
  label: {
    color: theme.palette.primary.main,
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
