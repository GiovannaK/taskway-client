import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Box,
  Divider,
  CardActions,
  Typography,
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './styles';

export const WorkspaceMemberCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar}>
            U
          </Avatar>
                  )}
        action={(
          <IconButton
            aria-label="settings"
            className={classes.typography}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
                  )}
        classes={{ title: classes.headerTitle }}
        titleTypographyProps={{ variant: 'h6' }}
        title="workspace title"
      />
      <CardContent>
        <Box display="flex" justifyContent="center">
          <AvatarGroup max={5}>
            <Avatar>C</Avatar>
            <Avatar>L</Avatar>
            <Avatar>C</Avatar>
          </AvatarGroup>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Typography variant="h6" className={classes.typography}>
          Criado em 02/07/2020
        </Typography>
      </CardActions>
    </Card>
  );
};
