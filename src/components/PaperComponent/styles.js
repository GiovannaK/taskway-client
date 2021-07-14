import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    background: theme.palette.primary.light,
    minHeight: '100vh',
    zIndex: -2,
    position: 'absolute',
    width: '100%',
  },
}));

export default useStyles;
