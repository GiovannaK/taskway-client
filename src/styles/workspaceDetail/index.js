import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
  title: {
    color: theme.palette.secondary.light,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  svg: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  svgGrid: {
    marginTop: '10vh',
  },
}));

export default useStyles;
