import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  infoTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
