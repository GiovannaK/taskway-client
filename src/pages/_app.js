import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer, Slide } from 'react-toastify';
import theme from '../theme';
import { client } from '../services/ApolloClient';
import 'react-toastify/dist/ReactToastify.min.css';
import { ProfileProvider } from '../context/ProfileContext';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Taskway | Colabore em tempo real</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Colabore e gerencie tarefas em tempo real com Taskway gratuitamente." />
        <meta property="og:title" content="Taskway | Colabore em tempo real" />
        <meta property="og:description" content="Colabore e gerencie tarefas em tempo real com Taskway gratuitamente." />
        <meta property="og:url" content="https://taskway-client.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ProfileProvider>
            <CssBaseline />
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </ProfileProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
