import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.secondary.main,
    width: '100%',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    transition: '0.5s ease-in-out',
    '&:hover': {
      filter: 'brightness(50%)',
      cursor: 'pointer',
    },
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 500,
    color: theme.palette.secondary.dark,
  },
  bio: {
    color: theme.palette.primary.dark,
  },
  inputFile: {
    display: 'none',
  },
  file: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
