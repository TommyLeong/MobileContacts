/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import Contacts from './Src/Containers/Contacts';
import createStore from './Src/Redux/Reducers';
import MainStackNavigator from './Src/Navigators/MainStackNavigator'

const store = createStore();

const App = () => {
  return(
    <Provider store={store}>
      <MainStackNavigator>
        <Contacts/>
      </MainStackNavigator>
    </Provider>
  )
}

export default App;