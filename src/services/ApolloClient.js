import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const link = createUploadLink({ uri: process.env.BACKEND_URL, credentials: 'include' });

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
