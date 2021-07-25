import { gql } from '@apollo/client';

export const QUERY_USERS_PERMISSIONS = gql`
  query usersPermissionsByWorkspace($workspaceId: ID!) {
  usersPermissionsByWorkspace(workspaceId: $workspaceId){
    id
    name
    permissions_users{
      id
      firstName
      lastName
      email
      profile{
        imageUrl
      }
    }
  }
}
`;
