import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 10,
    },
    headWrapper: {
        flex: 2,
    },
    bodyWrapper: {
        flex: 5.5,
        alignItems: 'center',
    },
    endWrapper: {
        flex: 2.5,
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        padding: 20,
        height: 1000
    },
    backPhoto: {
        width: 172,
        height: 165,
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
    textWarp: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    callerName: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: 'center',
    },
    callerRing: {
        fontSize: 16,
        color:  '#858585',
        marginTop: 20
    },
    starWarp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 30
    },
    Star: {
        width: 32,
        height: 32,
    },
    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: '90%',
        marginHorizontal: 20,
        borderRadius: 15
    },
    edit: {
        width: 22,
        height: 22,
        marginRight: 10

    },
    leaveText: {
        fontSize: 16,
        color:  '#858585',
    },

    button: {
        width: 230,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    skipButton: {
        width: 80,
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "#86b4f7",
        elevation: 20,
    },
    skipText: {
        color: '#4cd981',
        fontSize: 17,
        fontWeight: 'bold',
    },
    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 40
    },
});
