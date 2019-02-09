/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import { Provider } from 'react-redux';

import { AppRegistry } from 'react-natve'/;
import App from './App';
import { name as appName } from './app.json';

import configureStore from './src/store/configureStore';

const store = configureStore()

const RNStore = ()=>(
  <Provider>
  <App/>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNStore);
