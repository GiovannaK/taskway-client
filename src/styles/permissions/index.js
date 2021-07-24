import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
  title: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingBottom: theme.spacing(1),
  },
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: '100%',
  },
  avatar: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  headerTitle: {
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

export default useStyles;
