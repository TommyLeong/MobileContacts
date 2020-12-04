import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Contacts from '../Containers/Contacts';
import ContactDetails from '../Containers/ContactDetails';

const Stack = createStackNavigator();

const AppFlow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name="Contact App">
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetails}
          options={{headerShown: true, title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainStackNavigator = () => {
  return AppFlow();
};

export default MainStackNavigator;
