import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import {StyleSheet, View} from 'react-native';
import {StackNavigatorParams} from '../navigation';

type HomeScreenProps = {
  navigation: StackNavigationProp<StackNavigatorParams, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <ScreenContainer verticalCenter>
      <View style={styles.sectionContainer}>
        <Button
          title="Original Homescreen"
          onPress={() => navigation.navigate('LegacyHomeScreen')}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Button
          title="Basic Navigation Example"
          onPress={() =>
            navigation.navigate('NavigationExample', {routeId: '123'})
          }
        />
      </View>
      <View style={styles.sectionContainer}>
        <Button
          title="Drawer Navigation Example"
          onPress={() => navigation.navigate('DrawerNavigationExample')}
        />
      </View>

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
