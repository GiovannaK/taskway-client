import { gql } from '@apollo/client';

export const QUERY_USERS_PERMISSIONS = gql`
  query usersPermissionsByWorkspace($workspaceId: ID!) {
  usersPermissionsByWorkspace(workspaceId: $workspaceId){
    id
    title
    workspaces_permissions{
      id
      user_permission{
        firstName
        lastName
        id
        profile{
          imageUrl
        }
      }
      permissions{
        id
        name
      }
    }
  }
}
`;
