import React, { useState } from 'react';
import {
  Box, Grid, Card, CardContent, TextField, Select, InputLabel,
  MenuItem,
  Button,
  Toolbar,
  Chip,
  Avatar,
  Input,
  Typography,
} from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'moment/locale/pt-br';
import moment from 'moment';
import { GridComponent } from '../components/GridComponent';
import { PaperComponent } from '../components/PaperComponent';
import { TopBar } from '../components/TopBar';
import useStyles from '../styles/updateTask';
import Layout from '../components/Layout';
import { SendFile } from '../components/SendFile';

const updateTask = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <PaperComponent>
      <TopBar />
      <Layout title="Taskway | Atualizar Tarefa">
        <Box pt={8}>
          <Grid container align="center" justify="center">
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
              <Card className={classes.card}>
                <CardContent>
                  <Toolbar />
                  <Typography variant="h5" className={classes.title}>
                    Atualizar Tarefa
                  </Typography>
                  <Toolbar />
                  <form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          id="standard-helperText"
                          label="Título"
                          variant="outlined"
                          required
                          defaultValue="Default Value"
                          className={classes.input}
                          InputLabelProps={{
                            className: classes.label,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                          id="standard-helperText"
                          label="Link"
                          defaultValue="Default Value"
                          variant="outlined"
                          className={classes.input}
                          InputLabelProps={{
                            className: classes.label,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                          id="standard-helperText"
                          label=" Descrição"
                          defaultValue="Default Value"
                          variant="outlined"
                          rows={4}
                          multiline
                          className={classes.input}
                          InputLabelProps={{
                            className: classes.label,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <InputLabel className={classes.label} id="status">
                          Progresso
                        </InputLabel>
                        <Select
                          id="status"
                          defaultValue="Default Value"
                          multiline
                          variant="outlined"
                          className={classes.input}
                        >
                          <MenuItem value="Not started">
                            Não Iniciada
                          </MenuItem>
                          <MenuItem value="In progress">
                            Em Progresso
                          </MenuItem>
                          <MenuItem value="finished">
                            Finalizada
                          </MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <InputLabel className={classes.label} id="priority">
                          Prioridade
                        </InputLabel>
                        <Select
                          id="priority"
                          defaultValue="Default Value"
                          multiline
                          variant="outlined"
                          className={classes.input}
                        >
                          <MenuItem value="Low">
                            Baixa
                          </MenuItem>
                          <MenuItem value="Medium">
                            Média
                          </MenuItem>
                          <MenuItem value="High">
                            Alta
                          </MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <MuiPickersUtilsProvider locale={moment.locale('pt-br')} utils={MomentUtils}>
                          <KeyboardDatePicker
                            disableToolbar
                            variant="outlined"
                            format="DD/MM/YYYY"
                            margin="normal"
                            inputVariant="outlined"
                            id="date-picker-inline"
                            label="Prazo"
                            value={selectedDate}
                            onChange={handleDateChange}
                            error={false}
                            style={{ width: '100%' }}
                            InputLabelProps={{
                              className: classes.label,
                            }}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <InputLabel className={classes.label} id="assignedTo">
                          Atribuir
                        </InputLabel>
                        <Select
                          id="assignedTo"
                          defaultValue="Default Value"
                          multiline
                          variant="outlined"
                          className={classes.input}
                        >
                          <MenuItem value="Low">
                            <Chip
                              avatar={<Avatar>M</Avatar>}
                              label="AAAAAA bBBBBB"
                              variant="outlined"
                            />
                          </MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                          type="submit"
                          className={classes.button}
                          variant="outlined"
                        >
                          Atualizar
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                  <SendFile />
                </CardContent>
              </Card>
            </Grid>
            <Toolbar />
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>

  );
};

export default updateTask;
