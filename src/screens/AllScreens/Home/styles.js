import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        padding: 20,
        // height: 1000
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
    },
    textInput: {
      width: '68%'
    },
    IconSearch: {
        width: 24,
        height: 24,
        marginRight: 20
    },
    FilterBtn: {
        backgroundColor: '#f7ede1',
        borderRadius: 10,
        padding: 10
    },
    Filter: {
        width: 26,
        height: 26,
    },
    bannerRow: {
        marginTop: 20,
    },
    PromoAdvertising: {
        width: '100%',
        height: 162,
    },
    bannerInner: {
        position: 'absolute',
        right: 20,
        top: 30
    },
    bannertitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    bannerBtn: {
        width: 80,
        height: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 20,
        shadowColor: "#000",
        elevation: 20,
    },
    bannerBtnText: {
        fontSize: 12,
        color: '#15BE77',
        fontWeight: 'bold',
    },
    listTitleCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    listtitle: {
        fontWeight: 'bold'
    },
    viewText: {
        color: '#FF7C32',
        fontSize: 12
    },
    listTitleContPo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    }

});
