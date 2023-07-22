import * as React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParams} from '../navigation';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import {darkTheme} from '../theme/restyle';

type NavigationProps = StackNavigationProp<StackNavigatorParams>;

const Daily = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScreenContainer>
      <View style={styles.sectionContainer}>
        <Text>
          Drawer navigation example. Click the hamburger on the top left to open
        </Text>
      </View>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </ScreenContainer>
  );
};

const Weekly = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScreenContainer>
      <View style={styles.sectionContainer}>
        <Text>👋</Text>
      </View>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </ScreenContainer>
  );
};

const Monthly = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScreenContainer>
      <View style={styles.sectionContainer}>
        <Text>🌊</Text>
      </View>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </ScreenContainer>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigationExample = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Drawer.Navigator
        initialRouteName="Daily"
        screenOptions={{
          // example of using custom styling from restyle
          drawerActiveTintColor: darkTheme.colors.title,
          drawerInactiveTintColor: darkTheme.colors.text,
          drawerStyle: {
            backgroundColor: darkTheme.colors.background,
            width: 240,
          },
          headerStyle: {
            backgroundColor: darkTheme.colors.cardPrimaryBackground,
          },
          headerTintColor: darkTheme.colors.title,
        }}>
        <Drawer.Screen name="Daily" component={Daily} />
        <Drawer.Screen
          name="Weekly"
          component={Weekly}
          options={{
            // Example of using a custom label component
            drawerLabel: ({focused, color}) => (
              <Text style={{color, fontWeight: 'bold'}}>Weekly</Text>
            ),
          }}
        />
        <Drawer.Screen name="Monthly" component={Monthly} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigationExample;

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
});
