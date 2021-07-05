import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  icon: {
    color: theme.palette.secondary.light,
  },
}));

export default useStyles;
