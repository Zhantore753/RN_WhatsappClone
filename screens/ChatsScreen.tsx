import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem/';
import ChatRooms from '../data/ChatRooms';
import Chats from '../data/Chats';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={ChatRooms[0]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
