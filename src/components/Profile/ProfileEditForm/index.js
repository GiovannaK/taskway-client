import React from 'react';
import {
  Grid, Toolbar, Card, CardContent,
  Typography,
  InputLabel,
  InputAdornment,
  Input,
  Icon,
  Button,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';

export const ProfileEditForm = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography
            variant="h6"
            className={classes.infoTitle}
            align="center"
          >
            <Icon>
              <EditIcon />
            </Icon>
            Minhas Informações
          </Typography>
          <Toolbar />
          <form>
            <Grid
              container
              spacing={1}
              align="center"
              justify="center"
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputLabel
                  htmlFor="firstName"
                  className={classes.label}
                >
                  Primeiro Nome
                </InputLabel>
                <Input
                  id="firstName"
                  startAdornment={(
                    <InputAdornment position="start">
                      <PersonIcon className={classes.icon} />
                    </InputAdornment>
                  )}
                  className={classes.input}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputLabel
                  htmlFor="lastName"
                  className={classes.label}
                >
                  Último Nome
                </InputLabel>
                <Input
                  id="lastName"
                  startAdornment={(
                    <InputAdornment position="start">
                      <GroupIcon className={classes.icon} />
                    </InputAdornment>
                )}
                  className={classes.input}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <InputLabel
                  htmlFor="bio"
                  className={classes.label}
                >
                  Biografia
                </InputLabel>
                <Input
                  id="bio"
                  multiline
                  startAdornment={(
                    <InputAdornment position="start">
                      <ImportContactsIcon className={classes.icon} />
                    </InputAdornment>
                )}
                  className={classes.input}
                />
              </Grid>
            </Grid>
            <Toolbar />
            <Button type="submit" variant="outlined" className={classes.button}>
              Atualizar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};
