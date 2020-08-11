/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { CounterScreen } from './src/screens';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
};

export default App;
