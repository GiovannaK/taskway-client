import {
  Box, Container, Divider, Grid, Link, Paper, Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const FooterSection = () => {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.paperRoot }} elevation={0} square>
      <Container>
        <Box pt={3} pb={3}>
          <Typography
            align="center"
            className={classes.title}
            variant="h4"
          >
            Siga-nos
          </Typography>
          <Box pt={2} display="flex" alignItems="center" justifyContent="center">
            <img src="facebook.svg" alt="facebook logo" className={classes.socialLogo} />
            <img src="twitter.svg" alt="twitter logo" className={classes.socialLogo} />
            <img src="instagram.svg" alt="instagram logo" className={classes.socialLogo} />
          </Box>
        </Box>
        <Grid container align="center" justify="center">
          <Grid item xs={2} sm={2} md={3} lg={3} xl={3}>
            <Link href="!#" className={classes.textTypography}>
              Sobre nós
            </Link>
          </Grid>
          <Grid item xs={2} sm={2} md={3} lg={3} xl={3}>
            <Link href="!#" className={classes.textTypography}>
              Produtos
            </Link>
          </Grid>
          <Grid item xs={2} sm={2} md={3} lg={3} xl={3}>
            <Link href="!#" className={classes.textTypography}>
              Newsletter
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};
