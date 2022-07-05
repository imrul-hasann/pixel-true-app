import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        marginTop: 50,
        marginBottom: 50,
        width: '100%',
        height: 400
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

    },
    subText: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    title: {
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 25
    },
    nextButton: {
        alignItems: 'center',
        marginTop: 30
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
