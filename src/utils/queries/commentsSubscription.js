import { gql } from '@apollo/client';

export const COMMENT_SUBSCRIPTIONS = gql`
  subscription addComment($taskId: ID!) {
    addComment(taskId: $taskId){

      comment{
        id
        body
        createdAt
        updatedAt
      }
      author{
        id
        firstName
        lastName
      }
      profile{
        imageUrl
      }
    }
  }
`;
