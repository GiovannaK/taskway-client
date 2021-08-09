import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: theme.palette.secondary.dark,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  icon: {
    color: theme.palette.primary.light,
  },
  title: {
    color: theme.palette.secondary.dark,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

export default useStyles;
