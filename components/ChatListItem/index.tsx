import React, { useState } from 'react';
import { View,
    Text,
    Image,
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import ChatProfileZoom from './chatProfileZoom';

export type ChatListItemProps = {
    chatRoom: ChatRoom; 
};

const ChatListItem = ( props: ChatListItemProps ) => {
    const {chatRoom} = props;

    const navigation = useNavigation()

    const user = chatRoom.users[1];

    const [modalVisible, setModalVisible] = useState(false);

    const onClick = () =>{
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name,
            uri: user.imageUri,
            backBut: () =>{
                navigation.navigate('Root');
            },
        })
    };

    return(
        
            <View style={styles.container}>
                <TouchableHighlight style={styles.openButton}
                    onPress={() => {
                        setModalVisible(true);
                    }}>
                    <View style={styles.leftContainer}>
                        <Image source={{ uri: user.imageUri }} style={styles.avatar}/>
                    </View>
                </TouchableHighlight>


                <ChatProfileZoom user={user} modalVisible={modalVisible} setModalVisible={setModalVisible}/>


                <TouchableWithoutFeedback onPress={onClick}>
                    <View style={styles.rightContainer}>
                        <View style={styles.midContainer}>
                            <Text style={styles.username}>{user.name}</Text>
                            <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                        </View>
                        <Text style={styles.time}>
                            {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
                
            </View>
    )
};

export default ChatListItem;