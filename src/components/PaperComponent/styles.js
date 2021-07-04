import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    background: theme.palette.primary.light,
    minHeight: '100vh',
  },
}));

export default useStyles;
