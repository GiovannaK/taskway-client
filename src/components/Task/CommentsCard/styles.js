import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
    maxHeight: '40vh',
    overflowY: 'auto',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  date: {
    marginLeft: theme.spacing(1),
    fontWeight: 'lighter',
    color: theme.palette.text.primary,
  },
  message: {
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  name: {
    color: theme.palette.text.primary,
  },
  messageInput: {
    width: '100%',
    height: '100%',
  },
  button: {
    width: '100%',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
