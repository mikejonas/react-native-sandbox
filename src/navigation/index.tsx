// navigation/AppNavigator.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import LegacyHomeScreen from '../screens/LegacyHome';
import NavigationExample from '../screens/NavigationExample';
import DrawerNavigationExample from '../screens/DrawerNavigationExample';
import RestyleExample from '../screens/RestyleExample';
import ChatExample from '../screens/ChatExample';
import AuthExample from '../screens/AuthExample';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../theme/restyle';

export type StackNavigatorParams = {
  DrawerNavigationExample: undefined;
  Home: undefined;
  LegacyHomeScreen: undefined;
  NavigationExample: {routeId: string};
  RestyleExample: undefined;
  ChatExample: undefined;
  AuthExample: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>(); // provide the type to your createStackNavigator

const Navigation = () => {
  const theme = useTheme<Theme>();

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
      <Stack.Screen
        name="RestyleExample"
        component={RestyleExample}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white', // changes the color of the back button
        }}
      />
      <Stack.Screen
        name="ChatExample"
        component={ChatExample}
        options={{
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: theme.colors.text, // changes the color of the back button
          headerStyle: {
            backgroundColor: theme.colors.background,
            borderBottomWidth: 0,
            shadowOpacity: 0, // this removes the bottom border
            elevation: 0, // this removes shadow on Android
          },
        }}
      />
      <Stack.Screen name="AuthExample" component={AuthExample} />
    </Stack.Navigator>
  );
};

export default Navigation;
