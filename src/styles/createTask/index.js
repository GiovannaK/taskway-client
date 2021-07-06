import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
  label: {
    color: theme.palette.secondary.dark,
  },
  input: {
    width: '100%',
  },
  outlineColor: {
    borderColor: theme.palette.primary.dark,
  },
  button: {
    width: '100%',
    color: theme.palette.primary.dark,
  },
}));

export default useStyles;
