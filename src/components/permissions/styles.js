import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingBottom: theme.spacing(1),
  },
  label: {
    color: theme.palette.secondary.dark,
    paddingBottom: theme.spacing(1),
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
