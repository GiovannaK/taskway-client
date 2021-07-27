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
  avatar: {
    cursor: 'pointer',
    transition: '0.5s ease-in-out',
    '&:hover': {
      filter: 'brightness(50%)',
      cursor: 'pointer',
    },
    marginRight: theme.spacing(1),
  },
  label: {
    color: theme.palette.secondary.dark,
  },
  input: {
    width: '100%',
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: '100%',
  },
  headerTitle: {
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  typography: {
    marginRight: theme.spacing(2),
  },
  button: {
    width: '100%',
    color: theme.palette.primary.main,
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
