import { gql } from '@apollo/client';

export const TASK_SITUATION = gql`
  query tasksSituation($workspaceId: ID!){
  tasksSituation(workspaceId: $workspaceId){
    progress
    count
  }
}
`;
