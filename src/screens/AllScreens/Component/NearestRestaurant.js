import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Empty, Image, TouchableOpacity} from 'react-native';


const ResturantImage = require('../../../assets/Component/ResturantImage.png');


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
        <TouchableOpacity style={styles.ResturantBtn} activeOpacity={.7}>
            <Image style={styles.ResturantImage} source={ResturantImage} />
        </TouchableOpacity>
        <Text style={styles.texttitle}>Vegan Resto</Text>
        <Text style={styles.subTitle}>12 Mins</Text>
    </View>
);
const numColumns = 2

const NearestRestaurant = () => {
    const renderItem = ({ item }) => <Item title={item.title} />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
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
        marginHorizontal: 5,
        shadowColor: "#c1d7f7",
        elevation: 20,
        borderRadius: 20,
        alignItems: 'center',
        width: '48%'
    },
    title: {
        fontSize: 32,
    },
    ResturantBtn: {

    },
    ResturantImage: {
        width: 100,
        height: 73,
    },
    texttitle: {
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 11,
        color: '#ababab'
    }
});

export default NearestRestaurant;


