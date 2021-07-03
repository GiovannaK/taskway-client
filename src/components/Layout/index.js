import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      { children }
    </Container>
  );
};

export default Layout;
