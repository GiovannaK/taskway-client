import {
  Avatar,
  Button,
  Card, CardContent,
  CardHeader, Chip, Divider, Grid, InputLabel, MenuItem, Select,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const AddPermissionForm = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        titleTypographyProps={{ variant: 'h5' }}
        title="Adicionar Permissões"
        align="center"
        classes={{ title: classes.headerTitle }}
      />
      <Divider />
      <CardContent>
        <form>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputLabel className={classes.label} id="priority">
                Membro do workspace
              </InputLabel>
              <Select
                id="priority"
                defaultValue="Default Value"
                multiline
                variant="outlined"
                className={classes.input}
              >
                <MenuItem value="Low">
                  <Chip avatar={<Avatar>A</Avatar>} label="Allan A" />
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputLabel className={classes.label} id="priority">
                Tipo de permissão
              </InputLabel>
              <Select
                id="priority"
                defaultValue="Default Value"
                multiline
                variant="outlined"
                className={classes.input}
              >
                <MenuItem value="Add">
                  Adicionar tarefas
                </MenuItem>
                <MenuItem value="Medium">
                  Editar tarefas
                </MenuItem>
                <MenuItem value="High">
                  Excluir tarefas
                </MenuItem>
              </Select>
            </Grid>
            <Button
              variant="outlined"
              className={classes.button}
              type="submit"
            >
              Salvar

            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};
