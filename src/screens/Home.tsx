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
          title="Basic navigation example"
          onPress={() =>
            navigation.navigate('NavigationExample', {routeId: '123'})
          }
        />
      </View>
      <Button
        title="Origianal Homescreen"
        onPress={() => navigation.navigate('OriginalHomescreen')}
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
