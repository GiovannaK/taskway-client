import { gql } from '@apollo/client';

export const QUERY_TASKS = gql`
  query tasks($workspaceId: ID!, $progress: String, $priority: String, $maxDate: String, $assignTo: ID!){
    tasks(workspaceId: $workspaceId, progress: $progress, priority: $priority, maxDate: $maxDate assignTo: $assignTo){
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
        id
        email
        firstName
        lastName
        profile {
          imageUrl
        }
      }
    }
  }
`;
