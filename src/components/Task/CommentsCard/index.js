import React from 'react';
import {
  Box, Grid, Card, Toolbar,
  CardContent, Avatar, Typography, TextField, Button,
  IconButton,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import useStyles from './styles';

export const CommentsCard = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Box display="flex" alignItems="center">
            <Avatar className={classes.avatar}>
              A
            </Avatar>
            <Typography variant="h6" className={classes.name}>
              Allan A
            </Typography>
            <Typography variant="h6" className={classes.date}>
              há 5 dias
            </Typography>
          </Box>
          <Typography align="left" className={classes.message}>
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sunt, cum!
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <form>
            <Grid container alignItems="center">
              <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                <TextField
                  className={classes.messageInput}
                  id="outlined-basic"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <IconButton
                  className={classes.button}
                  type="submit"
                >
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
