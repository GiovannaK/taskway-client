import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  headerTitle: {
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 1.2,
  },
  typography: {
    color: theme.palette.secondary.light,
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
  cardHeader: {
    minHeight: 150,
  },
  member: {
    color: theme.palette.secondary.dark,
    fontWeight: 400,
    paddingBottom: theme.spacing(1),
  },
}));

export default useStyles;
