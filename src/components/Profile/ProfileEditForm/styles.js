import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  infoTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
  },
  input: {
    width: '100%',
  },
  label: {
    color: theme.palette.primary.dark,
  },
  icon: {
    color: theme.palette.secondary.dark,
  },
  button: {
    width: '100%',
    color: theme.palette.secondary.dark,
  },
}));

export default useStyles;
