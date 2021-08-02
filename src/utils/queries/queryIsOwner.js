import { gql } from '@apollo/client';

export const IS_OWNER = gql`
  query isOwner($workspaceId: ID!) {
  isOwnerToAccess(workspaceId: $workspaceId)
}
`;
