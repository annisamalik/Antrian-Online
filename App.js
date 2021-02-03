/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Decider from './screen/Decider';
import DrawerNavigator from './screen/DrawerNavigator';
import Welcome from './screen/Welcome';
import Login from './screen/Login';

function App() {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Navigation" headerMode="none">
          <Stack.Screen name="Navigation" component={DrawerNavigator} />
          <Stack.Screen name="Welcome" component={Decider} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
