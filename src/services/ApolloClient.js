import { ApolloClient, InMemoryCache, split } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const link = createUploadLink({ uri: 'http://localhost:4000/graphql', credentials: 'include' });

const wsLink = process.browser ? new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true,
  },
}) : null;

const splitLink = process.browser ? split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition'
      && definition.operation === 'subscription'
    );
  },
  wsLink,
  link,
) : link;
export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  splitLink,
  cache: new InMemoryCache(),
});
