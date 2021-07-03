import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: '13vh',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    color: theme.palette.primary.dark,
  },
}));

export default useStyles;
