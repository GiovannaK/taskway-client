import { ApolloClient, InMemoryCache, split } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = process.browser ? new WebSocketLink({
  uri: process.env.NEXT_PUBLIC_WEBSOCKET_URL,
  options: {
    reconnect: true,
  },
}) : null;

const linkUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const link = createUploadLink({ uri: linkUrl, credentials: 'include' });

const splitLink = process.browser ? split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  link,
) : link;

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: splitLink,
  cache: new InMemoryCache(),
});
