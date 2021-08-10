import {
  AppBar, Container, Tab, Tabs,
} from '@material-ui/core';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import useStyles from './styles';
import { ROOM } from '../../utils/queries/createRoomQuery';
import { Loading } from '../Loading';

export const TabComponent = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [selectedTab, setSelectedTab] = useState(0);

  const {
    error, loading,
    data: { roomPerWorkspace } = {},
  } = useQuery(ROOM, {
    fetchPolicy: 'cache-and-network',
    pollInterval: 5000,
    variables: {
      workspaceId: id,
    },
  });

  if (error) {
    <Loading />;
  }

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
            {roomPerWorkspace

            && (
            <Link href={`/workspace/${id}/room/${roomPerWorkspace.id}`}>
              <Tab value={2} label="Sala de bate-papo" />
            </Link>
            )}
          </Tabs>
        </Container>
      </AppBar>
    </>
  );
};
