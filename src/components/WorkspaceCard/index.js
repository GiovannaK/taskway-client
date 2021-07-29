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
import moment from 'moment';
import Link from 'next/link';
import useStyles from './styles';

export const WorkspaceCard = ({ workspace }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar
            aria-label="one"
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
      <CardContent className={classes.cardContent}>
        <Box display="flex" justifyContent="center">
          {!workspace.users.length && !workspace.users ? (
            <Typography variant="h6" className={classes.member}>
              Nenhum membro
            </Typography>
          ) : (

            <AvatarGroup max={5}>
              {workspace.users.map((user) => (
                <Avatar
                  key={user.id}
                  src={user.profile.imageUrl ? user.profile.imageUrl
                    : ''}
                />
              ))}
            </AvatarGroup>
          )}
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Typography variant="h6" className={classes.typography}>
          Criado em
          {' '}
          {moment.unix(workspace.createdAt / 1000).format('DD/MM/YYYY')}
        </Typography>
      </CardActions>
    </Card>
  );
};
