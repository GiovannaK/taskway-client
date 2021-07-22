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
import moment from 'moment-timezone';
import Link from 'next/link';
import useStyles from './styles';

export const Tasks = ({ task }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        action={(
          <Link href={`${task.workspaceId}/${task.id}`}>
            <IconButton
              aria-label="settings"
              className={classes.typography}
            >
              <ChevronRightIcon
                fontSize="large"
                className={classes.icon}
              />
            </IconButton>
          </Link>
      )}
        classes={{ title: classes.headerTitle }}
        titleTypographyProps={{ variant: 'h5' }}
        title={task.title}
      />
      <Divider />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Chip
            avatar={<Avatar src={task.tasksUsers.profile.imageUrl} />}
            label={`${task.tasksUsers.firstName} ${task.tasksUsers.lastName}`}
            variant="outlined"
            className={classes.labelChip}
          />
          <Typography variant="h6" className={classes.typography}>
            {(() => {
              if (task.progress === 'Not started') {
                return 'Não Iniciada';
              }
              if (task.progress === 'In progress') {
                return 'Em progresso';
              }
              return 'Finalizada';
            })()}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Icon>
          <AccessTimeIcon className={classes.icon} />
        </Icon>
        <Typography variant="h6" className={classes.typography}>
          {task.maxDate ? moment.utc(task.maxDate).tz('America/Sao_Paulo').format('DD/MM/YYYY') : ('Sem Prazo')}
        </Typography>
        <Icon>
          <TrendingUpIcon className={classes.icon} />
        </Icon>
        <Typography variant="h6" className={classes.typography}>
          {(() => {
            if (task.priority === 'Low') {
              return 'Baixa';
            }
            if (task.priority === 'Medium') {
              return 'Média';
            }
            return 'Alta';
          })()}
        </Typography>
      </CardActions>
    </Card>
  );
};
