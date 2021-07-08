import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: '90vh',
  },
  label: {
    color: theme.palette.secondary.dark,
  },
  input: {
    width: '100%',
    paddingBottom: theme.spacing(4),
  },
  button: {
    width: '100%',
    color: theme.palette.primary.main,
    padding: '0.5rem',
  },
  buttons: {
    color: theme.palette.secondary.dark,
  },
  images: {
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100vw',
    zIndex: -1,
  },
  svg: {
    width: '100%',
    height: '100%',
  },
  svgButton: {
    width: '50%',
    maxHeight: '20%',
  },
}));

export default useStyles;
