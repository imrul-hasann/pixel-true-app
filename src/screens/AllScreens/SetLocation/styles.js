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
    PinLogo: {
        width: 33,
        height: 33,
        marginRight: 20
    },
    locationText: {
      fontWeight: 'bold',
        fontSize: 15
    },
    locationIconCon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    setlocation: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 57,
        backgroundColor: '#F6F6F6',
        borderRadius: 10
    },

    btn: {
        marginTop: 40,
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
