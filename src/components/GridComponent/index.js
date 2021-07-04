import { Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const GridComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      align="center"
      justify="center"
    >
      {children}
    </Grid>
  );
};
