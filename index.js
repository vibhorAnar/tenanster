/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ApolloProvider} from '@apollo/client';
import client from './src/graphql';

const Redux = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Redux);
