import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.secondary.main,
    width: '100%',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    color: theme.palette.secondary.dark,
  },
  bio: {
    color: theme.palette.primary.dark,
  },
}));

export default useStyles;
