import { gql } from '@apollo/client';

export const MESSAGE_SUBSCRIPTION = gql`
  subscription addMessage($roomId: ID!){
    addMessage(roomId: $roomId){
      message{
        body
      }
      messages_user{
        firstName
        lastName
      }
      profile{
        imageUrl
      }
    }
  }
`;
