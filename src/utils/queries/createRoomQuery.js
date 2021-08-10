import { gql } from '@apollo/client';

export const ROOM = gql`
  query room($workspaceId: ID){
    roomPerWorkspace(workspaceId: $workspaceId){
      id
      workspaceId
    }
  }
`;
