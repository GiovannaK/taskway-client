import React from 'react';
import {
  Box, Card,
  CardContent, CardHeader, IconButton,
  Divider,
  Typography,
  Avatar,
  Chip,
  CardActions,
  Icon,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import useStyles from './styles';

export const Tasks = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        action={(
          <IconButton
            aria-label="settings"
            className={classes.typography}
          >
            <ChevronRightIcon
              fontSize="large"
              className={classes.icon}
            />
          </IconButton>
      )}
        classes={{ title: classes.headerTitle }}
        titleTypographyProps={{ variant: 'h5' }}
        title="Task Title"
      />
      <Divider />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Chip
            avatar={<Avatar>A</Avatar>}
            label="Allan A"
            variant="outlined"
            className={classes.labelChip}
          />
          <Typography variant="h6" className={classes.typography}>
            Em Progresso
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Icon>
          <AccessTimeIcon className={classes.icon} />
        </Icon>
        <Typography variant="h6" className={classes.typography}>
          30/07/2020
        </Typography>
        <Icon>
          <TrendingUpIcon className={classes.icon} />
        </Icon>
        <Typography variant="h6" className={classes.typography}>
          Alta
        </Typography>
      </CardActions>
    </Card>
  );
};
