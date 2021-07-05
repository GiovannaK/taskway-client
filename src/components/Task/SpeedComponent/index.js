import React from 'react';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDial from '@material-ui/lab/SpeedDial';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

export const SpeedComponent = () => {
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
  );
};
