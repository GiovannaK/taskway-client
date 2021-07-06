import { Button, Grid, Input } from '@material-ui/core';
import React from 'react';
import { GridComponent } from '../GridComponent';
import useStyles from './styles';

export const SendFile = () => {
  const classes = useStyles();
  return (
    <GridComponent>
      <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
        <Input
          type="file"
          className={classes.input}
        />
      </Grid>
      <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
        <Button
          className={classes.button}
          variant="outlined"
        >
          Enviar
        </Button>
      </Grid>
    </GridComponent>
  );
};
