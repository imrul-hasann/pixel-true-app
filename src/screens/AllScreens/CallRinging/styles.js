import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 10,
    },
    bodyWrapper: {
        flex: 8.8,
    },
    endWrapper: {
        flex: 1.2,
    },
    backgroundImage: {
        flex: 1,
        padding: 20,
        height: 900
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
        marginBottom: 20,
    },
    chatCon: {
        marginBottom: 40,
        justifyContent: 'space-between',
    },
    chatFromView: {
      // height: '100%',
      //   backgroundColor: 'red',
        shadowColor: "#abc9f5",
        elevation: 20,
    },
    chatRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        flexDirection: 'row',
    },
    chatTextConSub: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    titleChat: {
        fontWeight: 'bold',

    },
    chatTime: {
        color: '#B3B3B3',
        fontSize: 13,
    },
    active: {
        width: 6,
        height: 6,
        marginRight: 5
    },
    subChat: {
        color: '#B3B3B3',
        fontSize: 13
    },
    CallLogo: {
        width: 40,
        height: 40,
        marginRight: 20
    },
    chatFrom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    chatTextRow: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 15
    },
    chatToText: {
        fontSize: 13,
        color:  '#858585'

    },
    chatTo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    chatFromText: {
        fontSize: 13,
        color: '#fff',
        padding: 10,
        borderRadius: 15,
    },
    chatTextToRow: {
        backgroundColor: '#f2f2f2',
        borderRadius: 15,

    },
    button: {
        height: 20
    },

    sendRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "#86b4f7",
        elevation: 20,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
    },
    IconSend: {
        width: 24,
        height: 24,
    }



});
