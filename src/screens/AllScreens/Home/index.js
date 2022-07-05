import * as React from 'react';
import {
    Text ,
    View ,
    Image ,
    ScrollView ,
    StyleSheet ,
    TouchableOpacity ,
    TextInput,
    ImageBackground
} from 'react-native';
import styles from './styles';
import {LinearGradient} from "expo-linear-gradient";

import NearestRestaurant from "../Component/NearestRestaurant";
import PopularMenu from "../Component/PopularMenu";


const backgroundImage = require('../../../assets/Home/Pattern.png');
const IconNotifiaction = require('../../../assets/Home/IconNotifiaction.png');
const IconSearch = require('../../../assets/Home/IconSearch.png');
const Filter = require('../../../assets/Home/Filter.png');
const PromoAdvertising = require('../../../assets/Home/PromoAdvertising.png');


class Home extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>Find Your{"\n"}Favorite Food</Text>
                        <TouchableOpacity style={styles.IconNotifiactionBtn} activeOpacity={.7}>
                            <Image style={styles.IconNotifiaction} source={IconNotifiaction} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchRow}>
                        <View style={styles.inputRow}>
                            <Image style={styles.IconSearch} source={IconSearch} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="What do you want to order?"
                            />
                        </View>
                        <TouchableOpacity style={styles.FilterBtn} activeOpacity={.7}>
                            <Image style={styles.Filter} source={Filter} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bannerRow}>
                        <ImageBackground source={PromoAdvertising} resizeMode="cover" style={styles.PromoAdvertising}>
                            <View  style={styles.bannerInner}>
                                <Text style={styles.bannertitle}>Special Deal For{"\n"}October</Text>
                                <TouchableOpacity style={styles.bannerBtn} activeOpacity={.7}>
                                    <Text style={styles.bannerBtnText}>Buy Now</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.listRow}>
                        <View style={styles.listTitleCont}>
                            <Text style={styles.listtitle}>Nearest Restaurant</Text>
                            <TouchableOpacity style={styles.viewBtn} activeOpacity={.7}>
                                <Text style={styles.viewText}>View More</Text>
                            </TouchableOpacity>
                        </View>
                        <NearestRestaurant />
                    </View>
                    <View style={styles.listRow}>
                        <View style={styles.listTitleContPo}>
                            <Text style={styles.listtitle}>Popular Menu</Text>
                            <TouchableOpacity style={styles.viewBtn} activeOpacity={.7}>
                                <Text style={styles.viewText}>View More</Text>
                            </TouchableOpacity>
                        </View>
                        <PopularMenu />
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

export default Home;



