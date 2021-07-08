import { Paper } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const LoginPaper = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper
      classes={{ root: classes.paperRoot }}
      elevation={0}
      square
    >
      {children}
    </Paper>
  );
};
