import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles';
import { 
    MaterialIcons,
    FontAwesome5, 
    MaterialCommunityIcons,
    Entypo, 
    Fontisto,
} from '@expo/vector-icons';
import TransitionView from '../TransitionView/TransitionView';

const InputBox = ()=>{
    const [message, setMessage] = useState('');

    const onMicrophonePress = () =>{
        console.warn('Microphone');
    }

    const onSendPress = () =>{
        console.warn(`Sending: ${message}`);

        //backend

        setMessage('');
    }

    const onPress = () =>{
        if(!message){
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    function iconsAnimate(){
        if(!message){
            return (
            <View style={{flexDirection:'row'}}>
                <TransitionView animation="fadeInRight"><Entypo name="attachment" size={20} color="grey" style={styles.icon}/></TransitionView>
                <TransitionView animation="fadeInRight"><Fontisto name="camera" size={20} color="grey" style={styles.icon}/></TransitionView>
            </View>
        );
        } else {
            return(
                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <TransitionView animation="fadeIn"><Entypo name="attachment" size={20} color="grey" style={styles.icon}/></TransitionView>
                </View>
            );
           
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" style={{bottom: 2}}/>
                <TextInput
                    placeholder='Введите текст'
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                {
                    iconsAnimate()
                }
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                        {
                            !message 
                            ? <TransitionView animation="zoomInRight"><MaterialCommunityIcons name="microphone" size={24} color="white"/></TransitionView>
                            : <View>
                                <TransitionView animation="zoomInLeft"><MaterialIcons name="send" size={24} color="white"/></TransitionView>
                            </View>
                        }
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default InputBox;