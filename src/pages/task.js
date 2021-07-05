import {
  Box, Grid, Toolbar,
} from '@material-ui/core';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDial from '@material-ui/lab/SpeedDial';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { PaperComponent } from '../components/PaperComponent';
import { TopBar } from '../components/TopBar';
import useStyles from '../styles/task';
import Layout from '../components/Layout';
import { TaskCard } from '../components/Task/TaskCard';
import { CommentsCard } from '../components/Task/CommentsCard';

const task = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const actions = [
    { icon: <EditIcon className={classes.icon} />, name: 'Editar' },
    { icon: <DeleteIcon className={classes.icon} />, name: 'Apagar' },
  ];
  return (
    <PaperComponent>
      <TopBar />
      <Layout>
        <Box pt={10}>
          <Grid container align="center" justify="center">
            <Grid item xs={12} sm={12} md={12} lg={10} xl={8}>
              <TaskCard />
              <Toolbar />
              <CommentsCard />
            </Grid>
          </Grid>
        </Box>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<EditIcon className={classes.icon} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="up"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Layout>
    </PaperComponent>
  );
};

export default task;
