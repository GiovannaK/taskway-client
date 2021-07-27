import { gql } from '@apollo/client';

export const USERS_WORKSPACE = gql`
  query usersWorkspace($id: ID!) {
    usersWorkspace(id: $id){
      firstName
      lastName
      email
      id
      profile {
        imageUrl
      }
    }
  }
`;
