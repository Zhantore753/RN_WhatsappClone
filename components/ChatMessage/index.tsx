import React from 'react';
import {Text, View} from 'react-native';
import {Message, Group} from '../../types';
import moment from "moment";
import styles from './styles';

export type ChatMessageProps = {
    message: Message;
    group: Group;
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message, group} = props;

    const isMyMessage = () =>{
        return message.user.id === 'u1';
    };
    return( 
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                    // alignSelf: isMyMessage() ? 'flex-end' : 'auto',
                    marginLeft: isMyMessage() ? 70 : 0,
                }
            ]}>
                {group && !isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <View style={styles.messageIn}>
                    <Text style={styles.message}>{message.content}</Text>
                    <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
                </View>
            </View>
        </View>
    )
};

export default ChatMessage;