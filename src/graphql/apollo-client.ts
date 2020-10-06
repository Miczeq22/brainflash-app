import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { authFetch } from '@graphql/auth-fetch';

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    fetch: authFetch,
    uri: process.env.REACT_APP_GRAPHQL_URL,
  }),
});
