import { Container } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from './styles';

const Layout = ({ title, children }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container className={classes.container}>
        { children }
      </Container>
    </>
  );
};

export default Layout;
