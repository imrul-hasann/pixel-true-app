import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        padding: 20,
        height: 1000
    },
    IconBack: {
        width: 50,
        height: 50,
        marginTop: 40,
        marginBottom: 20
    },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
        marginBottom: 20
    },
    chatCon: {
        marginBottom: 10,
    },
    chatRow: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: "#c1d7f7",
        elevation: 20,
        padding: 10,
    },
    chatText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    PhotoProfile: {
        width: 62,
        height: 62,
        borderRadius: 15,
        justifyContent: 'center',
        marginRight: 20
    },
    chatTextCon: {
        width: '75%'
    },
    titleChat: {
        fontWeight: 'bold'
    },
    chatTime: {
        color: '#B3B3B3',
        fontSize: 13
    },
    subChat: {
        color: '#B3B3B3',
        fontSize: 13
    }



});
