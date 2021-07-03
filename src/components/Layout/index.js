import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container>
      { children }
    </Container>
  );
};

export default Layout;
