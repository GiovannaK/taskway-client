import { gql } from '@apollo/client';

export const HAS_PERMISSION_TO_ACCESS = gql`
  query hasPermission($workspaceId: ID!) {
  hasPermissionToAccessWorkspace(workspaceId: $workspaceId)
}
`;
