import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
  button: {
    width: '100%',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
