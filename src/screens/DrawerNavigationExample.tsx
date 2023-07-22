import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParams} from '../navigation';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';

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
    <Drawer.Navigator>
      <Drawer.Screen name="Daily" component={Daily} />
      <Drawer.Screen name="Weekly" component={Weekly} />
      <Drawer.Screen name="Monthly" component={Monthly} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationExample;

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
});
