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
    inputContainer: {
        marginTop: 40
    },
    textInput: {
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
    submitButton: {
        alignItems: 'center',
        marginTop: 70
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
