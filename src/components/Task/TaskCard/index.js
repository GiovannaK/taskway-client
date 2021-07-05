import {
  Box, Grid, Card,
  CardContent,
  Icon,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import React from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LinkIcon from '@material-ui/icons/Link';
import EditIcon from '@material-ui/icons/Edit';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';

export const TaskCard = () => {
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
              20 min
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={4} xl={4}>
            <Typography variant="h5" className={classes.headerTitle}>
              Task Title
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={4} xl={4}>
            <Typography variant="h6" className={classes.priority}>
              <Icon className={classes.icon}>
                <TrendingUpIcon />
              </Icon>
              Alta
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Box pt={2} pb={3}>
          <Typography variant="h6" align="left">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Commodi temporibus quaerat iusto
            alias incidunt sed! Similique non,
            ipsa ab ducimus hic fugiat velit esse,
            voluptatibus labore, architecto distinctio a
            numquam. Fugiat nesciunt dolorem, ad commodi
            laudantium facilis eos voluptate harum animi
            voluptatem numquam quia similique nam doloribus neque? Commodi, possimus!
          </Typography>
        </Box>
        <Grid
          container
          align="center"
          justify="center"
          spacing={2}
        >
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <Button
              startIcon={<LinkIcon />}
              className={classes.button}
              variant="outlined"
            >
              Link
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <Button
              startIcon={<InsertDriveFileIcon />}
              className={classes.button}
              variant="outlined"
            >
              Arquivo
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <Icon className={classes.icon}>
              <AccessTimeIcon />
            </Icon>
            <Typography variant="h6" className={classes.priority}>
              20/07/2020
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
            <Icon className={classes.icon}>
              <MoreHorizIcon />
            </Icon>
            <Typography variant="h6" className={classes.priority}>
              Em Progresso
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
