import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Loading } from '../components/Loading';

export const RoomContext = createContext({});

const ROOM = gql`
  query room($workspaceId: ID){
  roomPerWorkspace(workspaceId: $workspaceId){
    id
    workspaceId
  }
}
`;

export const RoomProvider = ({ children }) => {
  const [room, setRoom] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const {
    error, loading,
    data: { roomPerWorkspace } = {},
  } = useQuery(ROOM, {
    variables: {
      workspaceId: id,
    },
  });

  if (error) {
    <Loading />;
  }

  if (loading) {
    <Loading />;
  }

  useEffect(() => {
    if (roomPerWorkspace) {
      setRoom(roomPerWorkspace);
    }
  }, [roomPerWorkspace]);

  return (
    <RoomContext.Provider value={{ room, ROOM }}>
      {children}
    </RoomContext.Provider>
  );
};
