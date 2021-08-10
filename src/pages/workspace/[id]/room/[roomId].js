import { Box, Toolbar } from '@material-ui/core';
import React from 'react';
import { ChatMessage } from '../../../../components/ChatMessages';
import Layout from '../../../../components/Layout';
import { PaperComponent } from '../../../../components/PaperComponent';
import { TabComponent } from '../../../../components/TabComponent';
import { TopBar } from '../../../../components/TopBar';
import useStyles from '../../../../styles/chat';

const chat = () => {
  const classes = useStyles();
  return (
    <PaperComponent>
      <TopBar />
      <Layout>
        <TabComponent />
        <Box pt={10}>
          <ChatMessage />
        </Box>
      </Layout>
    </PaperComponent>
  );
};

export default chat;
