import React from 'react';
import { View,
    Text,
    Image,
    Alert,
    TouchableHighlight,
    Modal,
    ImageBackground 
} from 'react-native';
import styles from './style';
import { FontAwesome5,
    MaterialIcons, 
} from '@expo/vector-icons';

const ContactProfileZoom = ({user, modalVisible, setModalVisible}) =>{
    
    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    
                    <ImageBackground source={{ uri: user.imageUri }} style={{width: 250, height: 250}}>

                        <View style={styles.modalHead}>
                            <Text style={styles.usernameZoom}>{user.name}</Text>
                            <TouchableHighlight
                            underlayColor={'rgba(0, 0, 0, 0.3)'}
                            style={{paddingLeft:5, paddingRight:5, borderRadius: 60}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                            >
                                <FontAwesome5 style={{textAlign:"center", textAlignVertical:"center"}} name="times" color="#fff" size={24}></FontAwesome5>
                            </TouchableHighlight>
                            </View>
                    </ImageBackground>
                    
                    {/* <Image source={{ uri: user.imageUri }} style={styles.avatarZoom}/> */}
                    
                    <View style={styles.modalFooter}>
                        <TouchableHighlight
                            underlayColor={'#E6E6E6'}
                            style={{borderRadius: 60, width: 50, height: 50}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <MaterialIcons style={styles.icon} name="chat" size={24} color="#0C6157"/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#E6E6E6'}
                            style={{borderRadius: 60, width: 50, height: 50}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        ><MaterialIcons style={styles.icon} name="phone" size={24} color="#0C6157"/></TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#E6E6E6'}
                            style={{borderRadius: 60, width: 50, height: 50}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        ><FontAwesome5 style={styles.icon} name="video" size={24} color="#0C6157"/></TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#E6E6E6'}
                            style={{borderRadius: 60, width: 50, height: 50}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        ><MaterialIcons style={styles.icon} name="info" size={24} color="#0C6157"/></TouchableHighlight>
                        
                        
                        
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default ContactProfileZoom;