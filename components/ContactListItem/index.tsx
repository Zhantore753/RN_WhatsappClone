import React, { useState } from 'react';
import { View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';
import { User } from '../../types';
import styles from './style';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import ContactProfileZoom from './contactProfileZoom';

export type ContactListItemProps = {
    user: User; 
};

const ContactListItem = ( props: ContactListItemProps ) => {
    const {user} = props;

    const [modalVisible, setModalVisible] = useState(false);

    const onClick = () =>{
        //navigate
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

                <ContactProfileZoom user={user} modalVisible={modalVisible} setModalVisible={setModalVisible}/>


                
                <View style={styles.rightContainer}>
                    <Ripple
                        rippleColor="rgba(0, 0, 0, 0.3)"
                        rippleDuration={600}
                        onPress={onClick}>
                        <View style={styles.rightContainerIn}>
                            <View style={styles.midContainer}>
                                <Text style={styles.username}>{user.name}</Text>
                                <Text numberOfLines={1} style={styles.status}>{user.status}</Text>
                            </View>
                        </View>
                        
                    </Ripple>
                </View>
                
                {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
                
            </View>
    )
};

export default ContactListItem;