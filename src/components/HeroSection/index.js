import {
  Box, Button, Hidden, Paper, Toolbar, Typography,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { laptopAnimation, titleAnimation } from './animation';
import useStyles from './styles';

export const HeroSection = () => {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.paperRoot }} elevation={0} square id="account">
      <Box pt={4}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={classes.box}
        >
          <motion.h1
            variants={titleAnimation}
            initial="hidden"
            animate="visible"
            transition={{ ease: 'easeInOut', duration: 1.5 }}
          >
            <Typography variant="h1" align="center" className={classes.title}>
              Colabore e atribua tarefas
            </Typography>
          </motion.h1>
          <motion.h2
            variants={titleAnimation}
            initial="hidden"
            animate="visible"
            transition={{ ease: 'easeInOut', duration: 1.8 }}
          >
            <Typography
              variant="h2"
              className={classes.title}
              align="center"
            >
              em tempo real
            </Typography>
          </motion.h2>
          <Toolbar />
          <Link href="/register">
            <Button variant="outlined" className={classes.signUpButton}>
              <Typography variant="h5" className={classes.typographySignUp}>
                Crie uma conta
              </Typography>
            </Button>
          </Link>
          <Box className={classes.laptopBox} display="flex" pt={3}>
            <motion.div
              variants={laptopAnimation}
              initial="hidden"
              animate="visible"
              transition={{ ease: 'easeInOut', duration: 1.8 }}
            >
              <img src="laptop.png" alt="laptop" className={classes.laptop} />
            </motion.div>
          </Box>
          <Hidden mdDown>
            <img src="wave.svg" alt="wave" className={classes.waveSvg} />
          </Hidden>
        </Box>
      </Box>
    </Paper>
  );
};
