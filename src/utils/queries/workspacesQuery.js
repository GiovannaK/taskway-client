import { gql } from '@apollo/client';

export const WORKSPACES_QUERY = gql`
  query workspaces {
    workspaces{
    id
    title
    createdAt
    users{
      email
      firstName
      profile{
        imageUrl
      }
    }
    owner {
      profile{
        id
        bio
        imageUrl
      }
    }
  }
}
`;
