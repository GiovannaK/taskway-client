import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    paddingTop: theme.spacing(10),
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    color: theme.palette.primary.dark,
  },
}));

export default useStyles;
