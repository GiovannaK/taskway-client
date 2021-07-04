import React from 'react';
import {
  Grid, Card, CardContent, Box, Avatar,
  Typography, Toolbar,
} from '@material-ui/core';
import useStyles from './styles';
import { GridComponent } from '../../GridComponent';

export const ProfileInfoCard = () => {
  const classes = useStyles();
  return (
    <GridComponent>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        align="center"
        justify="center"
      >
        <Card className={classes.card} variant="outlined">
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card elevation={0}>
                <CardContent>
                  <Avatar className={classes.avatar}>
                    A
                  </Avatar>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card elevation={0}>
                <CardContent>
                  <Typography
                    variant="h5"
                    className={classes.title}
                  >
                    User Username
                  </Typography>
                  <Toolbar />
                  <Typography
                    variant="h6"
                    className={classes.bio}
                    align="left"
                  >
                    Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Qui, vel!
                    amet consectetur adipisicing elit. Qui, vel!
                    amet consectetur adipisicing elit. Qui, vel!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </GridComponent>
  );
};
