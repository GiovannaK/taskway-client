import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  icon: {
    color: theme.palette.secondary.light,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.palette.secondary.light,
    paddingBottom: theme.spacing(3),
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
  uploadButton: {
    color: theme.palette.secondary.dark,
  },
}));

export default useStyles;
