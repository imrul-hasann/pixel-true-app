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

class Filter extends React.Component {
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
                    <View style={styles.catRow}>
                        <Text style={styles.catTitle}>Type</Text>
                        <View style={styles.catSubRow}>
                            <TouchableOpacity style={styles.catBtn} activeOpacity={.7}>
                                <Text style={styles.catBtnText}>Restaurant</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.catBtn} activeOpacity={.7}>
                                <Text style={styles.catBtnText}>Menu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.catRow}>
                        <Text style={styles.catTitle}>Location</Text>
                        <View style={styles.catSubRow}>
                            <TouchableOpacity style={styles.catBtn} activeOpacity={.7}>
                                <Text style={styles.catBtnText}>1 Km</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.catBtn} activeOpacity={.7}>
                                <Text style={styles.catBtnText}>>10 Km</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.catBtn} activeOpacity={.7}>
                                <Text style={styles.catBtnText}>10 Km</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.catRow}>
                        <Text style={styles.catTitle}>Food</Text>
                        <View style={styles.catSubRow}>
                            <TouchableOpacity style={styles.catBtn} activeOpacity={.7}>
                                <Text style={styles.catBtnText}>Cake</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.catBtn} activeOpacity={.7}>
                                <Text style={styles.catBtnText}>Soup</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.catBtn} activeOpacity={.7}>
                                <Text style={styles.catBtnText}>Main Course</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.catBtn} activeOpacity={.7}>
                                <Text style={styles.catBtnText}>Appetizer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.catBtn} activeOpacity={.7}>
                                <Text style={styles.catBtnText}>Dessert</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.pressButton}>
                        <LinearGradient
                            colors={['#53E88B', '#15BE77']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 1}}
                            style={styles.button}
                        >
                            <TouchableOpacity style={styles.button} activeOpacity={.7}>
                                <Text style={styles.buttonLoginText}>Search</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

export default Filter;



