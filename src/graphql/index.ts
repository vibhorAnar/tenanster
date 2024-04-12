import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {BASE_GRAPHQL_API} from '../env/env';
import {setContext} from '@apollo/client/link/context';
import {getToken} from '../utils';

const httpLink = new HttpLink({uri: BASE_GRAPHQL_API});

const authLink = setContext(async (_, {headers}) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '', // Add the token to the authorization header
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
