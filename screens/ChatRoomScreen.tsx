import React from 'react';
import {Text, FlatList, ImageBackground} from 'react-native';

import {useRoute, useNavigation} from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/BG.png'

const ChatRoomScreen = () => {

    const route = useRoute();

    const isGroupCheck = chatRoomData.isGroup;

    return(
        <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} group={isGroupCheck}/>}
                inverted
            />
        </ImageBackground>
    );
};

export default ChatRoomScreen;