import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: '100%',
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
    color: theme.palette.secondary.light,
    background: theme.palette.secondary.dark,
    padding: theme.spacing(1),
  },
  svg: {
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
