import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardActions,
  Typography,
} from '@material-ui/core';
import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import moment from 'moment';
import Link from 'next/link';
import useStyles from './styles';

export const WorkspaceMemberCard = ({ workspace }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar
            aria-label="profile"
            className={classes.avatar}
            src={workspace.owner.profile.imageUrl ? workspace.owner.profile.imageUrl : ''}
          />
        )}
        action={(
          <Link href={`/workspace/${workspace.id}`}>
            <IconButton
              aria-label="settings"
              className={classes.typography}
            >
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          </Link>
        )}
        classes={{ title: classes.headerTitle }}
        titleTypographyProps={{ variant: 'h6' }}
        title={workspace.title}
      />
      <CardActions>
        <Typography variant="h6" className={classes.typography}>
          {moment.unix(workspace.createdAt / 1000).format('DD/MM/YYYY')}
        </Typography>
      </CardActions>
    </Card>
  );
};
