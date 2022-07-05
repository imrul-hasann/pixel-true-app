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
        marginBottom: 30
    },
    logInText: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    inputContainer: {
        marginTop: 30
    },
    singleInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 340,
        height: 60,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: '#F4F4F4',
        shadowColor: "#c1d7f7",
        elevation: 20,
        marginBottom: 10
    },
    inputIcon: {
        padding: 15,
        margin: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    passInputIcon: {
        padding: 15,
        margin: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    textInput: {
        width: 280,
        height: 55,
        color: '#828181',
        backgroundColor: '#fff',
        fontSize: 15,
    },
    passInput: {
        width: 230,
        height: 55,
        color: '#828181',
        backgroundColor: '#fff',
        fontSize: 15,
    },
    checkList: {
        flexDirection: 'row',
        width: 340,
        marginTop: 10
    },
    CheckListIconText: {
        color: '#828181'
    },
    checkbox: {
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
        borderColor: '#dcdee0'
    },
    ForgotPasswordLink: {
        marginTop: 30,
        width: 150,
        height: 12
    },
    LoginButton: {
        alignItems: 'center',
        marginTop: 40
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
