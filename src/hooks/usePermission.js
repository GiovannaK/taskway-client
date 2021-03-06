import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useContext, useState, useEffect } from 'react';

import { Loading } from '../components/Loading';
import { ProfileContext } from '../context/ProfileContext';

const QUERY_USER_PERMISSION = gql`
  query userPermissionsByWorkspace($workspaceId: ID!) {
  userPermissionsByWorkspace(workspaceId: $workspaceId){
    id
    name
    permissions_users{
      id
      firstName
      lastName
      email
    }
  }
}
`;

export const usePermission = () => {
  /* const { userProfile } = useContext(ProfileContext); */
  const [permissions, setPermissions] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const {
    error, loading,
    data: { userPermissionsByWorkspace: userPermissions } = {},
  } = useQuery(QUERY_USER_PERMISSION, {
    variables: {
      workspaceId: id,
    },
  });

  if (loading) {
    <Loading />;
  }
  if (error) {
    <Loading />;
  }

  useEffect(() => {
    if (userPermissions) {
      setPermissions(userPermissions);
    }
  }, [userPermissions]);

  return [permissions];
};
