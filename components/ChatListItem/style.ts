import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width: '100%',
        padding: 10,
    },
    leftContainer:{
        flexDirection: 'row',
    },
    midContainer:{
        justifyContent: 'space-around',
    },
    rightContainer:{
        flexDirection:'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    avatar:{
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50
    },
    username:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    lastMessage:{
        maxWidth: 185,
        fontSize: 14,
        color: 'grey'
    },
    time:{
        fontSize: 14,
        color: 'grey',
    }
});

export default styles;