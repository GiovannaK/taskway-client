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
    [theme.breakpoints.up('xl')]: {
      minHeight: '70vh',
      maxHeight: '70vh',
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '70vh',
      maxHeight: '70vh',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '60vh',
      maxHeight: '60vh',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '60vh',
      maxHeight: '60vh',
    },
    overflowY: 'auto',
  },
  messageCard: {
    background: theme.palette.primary.light,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  messageInput: {
    width: '100%',
    height: '100%',
  },
  svg: {
    maxWidth: '50%',
  },
  fallback: {
    paddingTop: theme.spacing(2),
  },
  messageText: {
    fontSize: '1.2rem',
  },
  name: {
    fontSize: '0.9rem',
    paddingTop: theme.spacing(1),
  },
}));

export default useStyles;
