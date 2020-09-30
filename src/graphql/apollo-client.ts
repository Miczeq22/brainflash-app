import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { apolloFetch } from './apollo-fetch';

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    fetch: apolloFetch,
    uri: process.env.REACT_APP_GRAPHQL_URL,
  }),
});
