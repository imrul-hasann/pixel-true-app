import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        padding: 20
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
    },
    titleSubText: {
        marginTop: 20,
        lineHeight: 30
    },
    photoContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Photo: {
        width: 251,
        height: 260,
    },
    CloseIcon: {
        width: 31,
        height: 31,
        right: 15,
        top: 25,
        position: 'absolute'
    },
    submitButton: {
        alignItems: 'center',
        marginTop: 60,
    },
    button: {
        width: 157,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }

});
