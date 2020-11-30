import {ColorPropType, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    messageBox:{
        maxWidth: '80%',
        borderRadius: 5,
        padding: 10,
    },
    name:{
        fontWeight: "bold",
        color: Colors.light.tint,
        marginBottom: 5
    },
    messageIn:{
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    message:{
        fontSize: 16,
    },
    time:{
        position:'absolute',
        fontSize: 12,
        color: 'grey',
        left: '73%',
        bottom: -7,
    },
});

export default styles;