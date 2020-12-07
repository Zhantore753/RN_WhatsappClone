import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 5,
        alignItems:'flex-end',
    },
    mainContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems:'flex-end',
        maxHeight: 145,
    },
    icon:{
        marginHorizontal: 5,
        bottom: 4,
    },
    textInput:{
        flex: 1,
        marginHorizontal: 10,
        fontSize: 18,
        alignSelf: 'flex-end',
    },
    buttonContainer:{
        backgroundColor: Colors.light.tint,
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: 50
    },
});

export default styles;