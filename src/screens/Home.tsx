import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import {StyleSheet, View} from 'react-native';
import {StackNavigatorParams} from '../navigation';
import Box from '../components/Box';

type HomeScreenProps = {
  navigation: StackNavigationProp<StackNavigatorParams, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <ScreenContainer verticalCenter>
      <Box marginBottom="s">
        <Button
          title="Original Homescreen"
          onPress={() => navigation.navigate('LegacyHomeScreen')}
        />
      </Box>
      <Box marginBottom="s">
        <Button
          title="Basic Navigation Example"
          onPress={() =>
            navigation.navigate('NavigationExample', {routeId: '123'})
          }
        />
      </Box>
      <Box marginBottom="s">
        <Button
          title="Drawer Navigation Example"
          onPress={() => navigation.navigate('DrawerNavigationExample')}
        />
      </Box>

      <Button
        title="Restyle Example"
        onPress={() => navigation.navigate('RestyleExample')}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
});

export default HomeScreen;
