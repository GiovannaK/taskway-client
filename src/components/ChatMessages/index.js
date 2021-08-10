import {
  Avatar,
  Box, Card, CardContent, Grid, IconButton, TextField, Typography,
} from '@material-ui/core';
import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import useStyles from './styles';

export const ChatMessage = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
        <Card variant="outlined" className={classes.card} square>
          <CardContent className={classes.cardContent}>
            <Box className={classes.messageBox}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Card variant="outlined" className={classes.messageCard}>
                    <CardContent>
                      <Box display="flex" alignItems="center">
                        <Avatar className={classes.avatar} />
                        <Typography variant="h6" className={classes.messageText}>
                          Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Explicabo, quibusdam!
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
        <Card square variant="outlined">
          <CardContent>
            <form>
              <Grid container alignItems="center">
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                  <TextField
                    className={classes.messageInput}
                    id="outlined-basic"
                    variant="outlined"
                    autoComplete="off"
                    /* value={variables.body}
                    onChange={(e) => setVariables({ ...variables, body: e.target.value })} */
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
      </Grid>
    </Grid>
  );
};
