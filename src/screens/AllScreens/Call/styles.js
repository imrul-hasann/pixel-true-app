import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 10,
    },
    headWrapper: {
        flex: 2,
    },
    bodyWrapper: {
        flex: 6,
        alignItems: 'center',

    },
    endWrapper: {
        flex: 2,
        alignItems: 'center',

    },
    backgroundImage: {
        flex: 1,
        padding: 20,
        height: 1000
    },

    photo: {
        width: 160,
        height: 160,
        borderRadius: 100
    },
    photoBorder: {
        borderWidth: 5,
        borderColor: '#53E88B',
        borderRadius: 100
    },
    callerName: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30
    },
    callerRing: {
        fontSize: 18,
        color:  '#858585',
        marginTop: 20
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonVolumeUp: {
        backgroundColor: '#e1fceb',
        padding: 25,
        borderRadius: 100,
        marginRight: 20
    },
    VolumeUp: {
        width: 22,
        height: 22,
    },
    cross: {
        width: 22,
        height: 22,
    },
    buttonEnd: {
        backgroundColor: 'red',
        padding: 25,
        borderRadius: 100
    },

});
