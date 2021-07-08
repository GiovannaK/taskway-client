/* eslint-disable no-dupe-keys */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    background: '#007991', /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #78ffd6, #007991)',
    background: 'linear-gradient(to right, #78ffd6, #007991)',
    minHeight: '100vh',
    width: '100%',
    zIndex: -2,
    position: 'absolute',
  },
}));

export default useStyles;
