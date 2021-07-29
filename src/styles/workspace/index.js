import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    color: theme.palette.secondary.light,
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
  image: {
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100vw',
    zIndex: -1,
  },
  svg: {
    maxWidth: '50%',
    marginBottom: theme.spacing(3),
  },
  subtitle: {
    paddingTop: theme.spacing(2),
    textTransform: 'uppercase',
  },
}));

export default useStyles;
