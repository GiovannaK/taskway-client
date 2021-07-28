import { gql } from '@apollo/client';

export const QUERY_WORKSPACE_MEMBER = gql`
  query workspaceMember {
    workspaceMember{
      id
      title
      createdAt
      owner{
        profile{
          imageUrl
        }
      }
    }
  }
`;
