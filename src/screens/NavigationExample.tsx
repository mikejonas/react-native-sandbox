import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp as NavigationRouteProp} from '@react-navigation/native';
import ScreenContainer from '../components/ScreenContainer';

type RootStackParamList = {
  Home: undefined;
  'Original Homescreen': undefined;
  NavigationExample: {routeId: string};
};

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'NavigationExample'
>;

type RouteProp = NavigationRouteProp<RootStackParamList, 'NavigationExample'>;

type Props = {
  navigation: NavigationProp;
  route: RouteProp;
};

const NavigationExampleScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <ScreenContainer>
      <View style={styles.sectionContainer}>
        <Text>
          Nothing interesting to see here. Just an example of navigating to
          route id {route.params.routeId}.
        </Text>
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </ScreenContainer>
  );
};

export default NavigationExampleScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
});
