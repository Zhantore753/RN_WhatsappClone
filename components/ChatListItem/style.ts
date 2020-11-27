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
    avatarZoom:{
      width: 250,
      height: 250
    },
    username:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    usernameZoom:{
      color: '#fff',
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 100,
          height: 100
        },
        shadowOpacity: 1,
        shadowRadius: 0.5,
        elevation: 50
      },
      openButton: {
        borderRadius: 50,
        width: 60,
        height: 60,
        marginRight: 10,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      modalHead:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ccc',
        paddingVertical: 2,
        paddingHorizontal: 10,
      },
      modalFooter:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 2,
        paddingHorizontal: 10,
      },
      icon:{
        textAlign:'center',
        paddingTop: 12
      }
});

export default styles;