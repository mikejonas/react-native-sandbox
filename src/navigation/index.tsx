// navigation/AppNavigator.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import LegacyHomeScreen from '../screens/LegacyHome';
import NavigationExample from '../screens/NavigationExample';
import DrawerNavigationExample from '../screens/DrawerNavigationExample';

export type StackNavigatorParams = {
  DrawerNavigationExample: undefined;
  Home: undefined;
  LegacyHomeScreen: undefined;
  NavigationExample: {routeId: string};
};

const Stack = createStackNavigator<StackNavigatorParams>(); // provide the type to your createStackNavigator

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="DrawerNavigationExample"
        component={DrawerNavigationExample}
        options={{
          headerShown: false, // This will hide the header
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, // This will hide the header
        }}
      />
      <Stack.Screen name="LegacyHomeScreen" component={LegacyHomeScreen} />
      <Stack.Screen
        name="NavigationExample"
        children={props => <NavigationExample {...props} />}
        options={({route}) => ({
          headerTitle: `Route Id: ${route.params.routeId}`,
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
