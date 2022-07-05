import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 175,
        height: 190,
        marginTop: 40,
        marginBottom: 50
    },
    logInText: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    inputContainer: {
        marginTop: 40
    },
    textInput: {
        width: 325,
        height: 65,
        color: '#828181',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: '#F4F4F4',
        marginBottom: 20,
        padding: 25,
        fontSize: 15,
        shadowColor: "#c1d7f7",
        elevation: 20,
    },
    continueText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8
    },
    socialButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20
    },
    faceBookButton: {
        width: 150,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 1.5,
        backgroundColor: '#fff',
        borderColor: '#F4F4F4',
        shadowColor: "#c1d7f7",
        elevation: 20,
    },
    facebook: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15
    },
    ForgotPasswordLink: {
        marginTop: 20,
        width: 140,
        height: 10
    },
    LoginButton: {
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
    buttonLoginText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }

});
