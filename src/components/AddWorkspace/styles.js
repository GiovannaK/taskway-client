import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
  },
  title: {
    color: theme.palette.secondary.light,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  svg: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  svgGrid: {
    marginTop: '10vh',
  },
  label: {
    color: theme.palette.secondary.dark,
  },
  icon: {
    color: theme.palette.primary.main,
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
    color: theme.palette.primary.main,
    marginTop: theme.spacing(2),
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      minWidth: 500,
    },
    [theme.breakpoints.down('md')]: {
      minWidth: 400,
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 300,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 200,
    },
  },
}));

export default useStyles;
