import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
