import React from 'react';
import {
  Grid, Card, CardContent, Box, Avatar,
  Typography, Toolbar,
} from '@material-ui/core';
import useStyles from './styles';
import { GridComponent } from '../../GridComponent';

export const ProfileInfoCard = ({ userProfile }) => {
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
      >
        <Card className={classes.card} variant="outlined">
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card elevation={0}>
                <CardContent>
                  <Avatar
                    className={classes.avatar}
                    src={!userProfile.imageUrl ? '' : userProfile.imageUrl}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card elevation={0}>
                <CardContent>
                  {!userProfile.user ? (
                    <></>
                  ) : (

                    <Typography
                      variant="h5"
                      className={classes.title}
                    >
                      {`${!userProfile.user.firstName ? '' : userProfile.user.firstName} ${!userProfile.user.lastName ? '' : userProfile.user.lastName}`}
                    </Typography>
                  )}
                  <Toolbar />
                  <Typography
                    variant="h6"
                    className={classes.bio}
                  >
                    {!userProfile.bio ? 'Escreva sobre você' : userProfile.bio}
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
