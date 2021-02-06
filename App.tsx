// @refresh reset
import React from 'react';
import { LogBox } from 'react-native'

import Routes from './src/routes'

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;