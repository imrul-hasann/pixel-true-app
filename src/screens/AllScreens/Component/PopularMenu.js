import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Empty, Image, TouchableOpacity} from 'react-native';


const PhotoMenu = require('../../../assets/Component/PhotoMenu.png');


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Image style={styles.PhotoMenu} source={PhotoMenu} />
        <View style={styles.titlePrice}>
            <View>
                <Text style={styles.texttitle}>Green Noddle</Text>
                <Text style={styles.subTitle}>Warung Herbal</Text>
            </View>
            <Text style={styles.price}>$15</Text>
        </View>
    </View>
);

const PopularMenu = () => {
    const renderItem = ({ item }) => <Item title={item.title} />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Empty message="No data found." />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        marginTop: 20
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        shadowColor: "#c1d7f7",
        elevation: 20,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    title: {
        fontSize: 32,
    },
    ResturantBtn: {

    },
    PhotoMenu: {
        width: 64,
        height: 64,
        borderRadius: 10,

    },
    texttitle: {
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 11,
        color: '#ababab'
    },
    titlePrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '70%',
        marginLeft: 20
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FEAD1D'
    }
});

export default PopularMenu;


