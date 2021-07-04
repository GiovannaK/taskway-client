import React from 'react';
import {
  Grid, Card, CardContent,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';

export const ProfileSection = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography
            variant="h6"
            align="center"
            className={classes.infoTitle}
          >
            Workspaces
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
