import { gql } from '@apollo/client';

export const CREATE_WORKSPACE = gql`
  mutation createWorkspace($title: String!) {
    createWorkspace(title: $title){
      id
      ownerId
      title
      createdAt
      updatedAt
    }
  }
`;
