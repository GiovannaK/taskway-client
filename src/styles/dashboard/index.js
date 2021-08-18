import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    color: theme.palette.primary.dark,
    paddingBottom: theme.spacing(1),
    textTransform: 'uppercase',
  },
}));

export default useStyles;
