import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import {ThemeProvider} from '@shopify/restyle';
import {darkTheme, lightTheme} from './src/theme/restyle';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
