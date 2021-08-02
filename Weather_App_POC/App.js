/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import {AppPersistor, AppStore} from './src/redux/store';

import AppNavigator from './src/utils/AppNavigator';
import { Provider } from 'react-redux';
import React from 'react';

const App: () => React$Node = () => {
  return (
    <Provider store = {AppStore} >
        <AppNavigator/>
    </Provider>
  );
};

export default App;