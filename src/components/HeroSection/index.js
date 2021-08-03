import {
  Box, Button, Hidden, Paper, Toolbar, Typography,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { allWords } from './animation';
import useStyles from './styles';

export const HeroSection = () => {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.paperRoot }} elevation={0} square>
      <Box pt={4}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={classes.box}
        >
          <motion.h1 variants={allWords} initial="hidden" animate="visible">
            <Typography variant="h1" align="center" className={classes.title}>
              Colabore e atribua tarefas
            </Typography>
          </motion.h1>
          <Typography
            variant="h1"
            className={classes.title}
            align="center"
          >
            em tempo real
          </Typography>
          <Toolbar />
          <Button variant="outlined" className={classes.signUpButton}>
            <Typography variant="h5" className={classes.typographySignUp}>
              Crie uma conta
            </Typography>
          </Button>
          <Box className={classes.laptopBox} display="flex" pt={3}>
            <img src="laptop.png" alt="laptop" className={classes.laptop} />
          </Box>
          <Hidden mdDown>
            <img src="wave.svg" alt="wave" className={classes.waveSvg} />
          </Hidden>
        </Box>
      </Box>
    </Paper>
  );
};
