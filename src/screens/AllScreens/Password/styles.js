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
    passInput: {
        marginLeft: 20,
        color: '#3B3B3B',
        width: '80%',
    },
    passInputIcon: {
        width: 22,
        height: 15,
        marginRight: 20
    },
    singleInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 340,
        height: 60,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: '#F4F4F4',
        shadowColor: "#c1d7f7",
        elevation: 20,
        marginTop: 30
    },
    submitButton: {
        alignItems: 'center',
        marginTop: 150,
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
