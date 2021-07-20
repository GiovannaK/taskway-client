import { gql } from '@apollo/client';

export const QUERY_TASKS = gql`
  query tasks($workspaceId: ID!){
    tasks(workspaceId: $workspaceId){
      title
      workspaceId
      id
      link
      file
      description
      maxDate
      progress
      priority
      assignTo
      tasksUsers{
        firstName
        lastName
        profile {
          imageUrl
        }
      }
    }
  }
`;
