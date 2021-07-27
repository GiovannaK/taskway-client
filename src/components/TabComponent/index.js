import {
  AppBar, Container, Tab, Tabs,
} from '@material-ui/core';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useStyles from './styles';

export const TabComponent = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelectedTab = (e, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Container>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={selectedTab}
            className={classes.tab}
            onChange={handleSelectedTab}
          >
            <Link href={`/workspace/${id}`}>
              <Tab value={0} label="Tarefas" />
            </Link>
            <Link href={`/workspace/${id}/workspaceMembers`}>
              <Tab value={1} label="Membros do workspace" />
            </Link>
          </Tabs>
        </Container>
      </AppBar>
    </>
  );
};
