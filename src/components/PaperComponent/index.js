import React from 'react';
import { Paper } from '@material-ui/core';
import useStyles from './styles';

export const PaperComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.paperRoot }} elevation={0}>
      {children}
    </Paper>
  );
};
