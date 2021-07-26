import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const link = createUploadLink({ uri: 'http://localhost:4000/graphql', credentials: 'include' });

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link,
  cache: new InMemoryCache(),
});
