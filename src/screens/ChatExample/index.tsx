import React, {useState, useCallback} from 'react';
import {
  Button,
  TextInput,
  Image,
  FlatList,
  View,
  SafeAreaView,
} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/restyle';
import Text from '../../components/Text';
import Box from '../../components/Box';
import adjustColorBrightness from '../../utils/adjustColorBrightness';
import {mockBot, mockMessages, mockUser} from './mockMessages';

interface User {
  avatar: string;
  name: string;
}

export interface Message {
  id: string;
  text: string;
  user: User;
}

const avatarSize = 25;
const marginLeftSize = 's'; // Corresponding to your theme spacing value

const MessageItem: React.FC<{item: Message}> = ({item}) => (
  <Box marginBottom="s">
    <Box flexDirection="row" alignItems="center">
      <Image
        source={{uri: item.user.avatar}}
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
        }}
      />
      <Box marginLeft={marginLeftSize}>
        <Text variant="body">{item.user.name}</Text>
      </Box>
    </Box>
    <Box style={{marginLeft: avatarSize + 8}}>
      {/* Adjust the marginLeft here */}
      <Text variant="body">{item.text}</Text>
    </Box>
  </Box>
);

const ChatExample: React.FC = () => {
  const theme = useTheme<Theme>();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const submitMockMessage = async (mockMessageText: string) => {
    const lastMessageId = messages[messages.length - 1].id;

    setMessages(previousMessages => [
      ...previousMessages,
      {
        id: lastMessageId + 1,
        text: mockMessageText,
        user: mockUser,
      },
    ]);

    setIsBotTyping(true);
    // multi line message
    const botMessage = `Just cooking up a mock response as per your request, fresh out of the ChatGPT kitchen. It's a light-on-substance, high-on-hypothetical kind of dish, designed solely to fill the space in your user interface.

Consider this the digital equivalent of those plastic foods in furniture showrooms. No real nutritional value, but it gives you an idea of how your actual AI-powered feast would look. When you're ready to order up some real intellectual sustenance, just fire away your questions or tasks. Until then, bon appétit to this delightful bit of make-believe!`;
    const botTypingMessageId = lastMessageId + 2;

    await new Promise(resolve => setTimeout(resolve, 1000));

    setMessages(previousMessages => [
      ...previousMessages,
      {
        id: botTypingMessageId,
        text: botMessage,
        user: mockBot,
      },
    ]);

    setIsBotTyping(false);
  };

  return (
    <View style={{flex: 1}}>
      <Box flex={1} backgroundColor="background">
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({item}) => <MessageItem item={item} />}
          contentContainerStyle={{padding: theme.spacing.s}}
        />
        <SafeAreaView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: theme.spacing.s,
          }}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: theme.colors.text,
              color: theme.colors.text,
              borderRadius: 9,
              padding: theme.spacing.s,
            }}
            placeholder="Type your message here"
            placeholderTextColor={adjustColorBrightness(
              theme.colors.text,
              -0.25,
            )}
          />
          <Button title="Submit" onPress={() => submitMockMessage(message)} />
        </SafeAreaView>
      </Box>
    </View>
  );
};

export default ChatExample;
