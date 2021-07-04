import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    color: theme.palette.primary.dark,
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
