import {
  Box, Grid, Card,
  CardContent,
  Icon,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import React from 'react';
import moment from 'moment';
import LinkIcon from '@material-ui/icons/Link';
import EditIcon from '@material-ui/icons/Edit';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';

export const TaskCard = ({ taskDetail }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Grid
          container
          align="center"
          justify="center"
          spacing={1}
        >
          <Grid item xs={12} sm={3} md={3} lg={4} xl={4}>
            <Typography variant="h6" className={classes.edition}>
              <Icon className={classes.icon}>
                <EditIcon />
              </Icon>
              {moment.unix(taskDetail.createdAt / 1000).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={4} xl={4}>
            <Typography variant="h5" className={classes.headerTitle}>
              {taskDetail.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={4} xl={4}>
            <Typography variant="h6" className={classes.priority}>
              <Icon className={classes.icon}>
                <TrendingUpIcon />
              </Icon>
              {(() => {
                if (taskDetail.priority === 'Low') {
                  return 'Baixa';
                }
                if (taskDetail.priority === 'Medium') {
                  return 'Média';
                }
                return 'Alta';
              })()}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Box pt={2} pb={3} pr={3}>
          <Typography variant="h6" className={classes.description}>
            {taskDetail.description}
          </Typography>
        </Box>
        <Grid
          container
          align="center"
          justify="center"
          spacing={2}
        >
          {!taskDetail.link ? (
            <></>
          ) : (
            <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
              <Button
                startIcon={<LinkIcon />}
                className={classes.button}
                variant="outlined"
                target="_blank"
                href={taskDetail.link}
              >
                Link
              </Button>
            </Grid>
          )}
          {!taskDetail.file ? (
            <></>
          ) : (

            <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
              <Button
                startIcon={<InsertDriveFileIcon />}
                className={classes.button}
                variant="outlined"
                target="_blank"
                href={taskDetail.file}
              >
                Arquivo
              </Button>
            </Grid>
          )}
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <Icon className={classes.icon}>
              <AccessTimeIcon />
            </Icon>
            <Typography variant="h6" className={classes.priority}>
              {taskDetail.maxDate ? moment.unix(taskDetail.maxDate / 1000).format('DD/MM/YYYY') : ('Sem Prazo')}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <Icon className={classes.icon}>
              <MoreHorizIcon />
            </Icon>
            <Typography variant="h6" className={classes.priority}>
              {(() => {
                if (taskDetail.progress === 'Not started') {
                  return 'Não Iniciada';
                }
                if (taskDetail.progress === 'In progress') {
                  return 'Em progresso';
                }
                return 'Finalizada';
              })()}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
