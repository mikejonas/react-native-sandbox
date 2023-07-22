import React, {useState} from 'react';
import {
  ThemeProvider,
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import {darkTheme, lightTheme, Theme} from '../theme/restyle';

import {Switch, View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import Box from '../components/Box';
import Text from '../components/Text';

const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({themeKey: 'cardVariants'})], Box);

const RestyleExample = () => {
  const [isdarkMode, setIsDarkMode] = useState(true);
  const headerHeight = useHeaderHeight();
  return (
    <ThemeProvider theme={isdarkMode ? darkTheme : lightTheme}>
      <Box backgroundColor="background" flex={1}>
        <View style={{flex: 1, paddingTop: headerHeight}}>
          <Box flex={1} paddingHorizontal="m" gap="m" paddingTop="m">
            <Text variant="header">Welcome</Text>
            <Card
              variant="primary"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <Text variant="body">Toggle dark mode</Text>
              <Switch
                value={isdarkMode}
                onValueChange={(value: boolean) => setIsDarkMode(value)}
              />
            </Card>
            <Card variant="primary">
              <Text variant="body">
                This is a simple example displaying how to use Restyle
              </Text>
            </Card>
            <Card variant="secondary">
              <Text variant="body">
                You can find the theme in theme.ts. Update the theme values to
                see how it changes this screen
              </Text>
            </Card>
          </Box>
        </View>
      </Box>
    </ThemeProvider>
  );
};

export default RestyleExample;
