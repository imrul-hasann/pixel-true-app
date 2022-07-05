import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        padding: 20,
        height: 1000
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    IconNotifiaction: {
        width: 20,
        height: 25,
        marginTop: 10
    },
    IconNotifiactionBtn: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        elevation: 20,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    inputRow: {
        flexDirection: 'row',
        backgroundColor: '#f7ede1',
        borderRadius: 10,
        padding: 10,
        width: '100%'
    },
    IconSearch: {
        width: 24,
        height: 24,
        marginRight: 20
    },
    catRow: {
        marginTop: 20,
    },
    catSubRow: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    catTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    catBtn: {
        padding: 12,
        backgroundColor: '#f7ede1',
        marginRight: 20,
        borderRadius: 10,
        marginBottom: 20

    },
    catBtnText: {
        fontSize: 12,
        color: '#DA6317',

    },
    pressButton: {
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        width: '100%',
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
