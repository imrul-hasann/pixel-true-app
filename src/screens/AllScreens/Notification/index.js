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

const backgroundImage = require('../../../assets/Message/Pattern.png');
const IconBack = require('../../../assets/Message/IconBack.png');
const PhotoProfile = require('../../../assets/Message/PhotoProfile.png');
const PromoAdvertising = require('../../../assets/Home/PromoAdvertising.png');




class VoucherPromo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headWrapper}>
                    <ScrollView>
                        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                            <TouchableOpacity activeOpacity={.7}>
                                <Image style={styles.IconBack} source={IconBack} />
                            </TouchableOpacity>
                            <Text style={styles.titleText}>Chat</Text>

                            <TouchableOpacity style={styles.chatRow} activeOpacity={.7}>
                                <Image style={styles.PromoAdvertising} source={PromoAdvertising} />
                                <View  style={styles.bannerInner}>
                                    <Text style={styles.bannertitle}>Special Deal For{"\n"}October</Text>
                                    <TouchableOpacity style={styles.bannerBtn} activeOpacity={.7}>
                                        <Text style={styles.bannerBtnText}>Buy Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.chatRow} activeOpacity={.7}>
                                <Image style={styles.PromoAdvertising} source={PromoAdvertising} />
                                <View  style={styles.bannerInner}>
                                    <Text style={styles.bannertitle}>Special Deal For{"\n"}October</Text>
                                    <TouchableOpacity style={styles.bannerBtn} activeOpacity={.7}>
                                        <Text style={styles.bannerBtnText}>Buy Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </ScrollView>
                </View>

                <View style={styles.footerWrapper}>
                    <View style={styles.submitButton}>
                        <LinearGradient
                            colors={['#53E88B', '#15BE77']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 1}}
                            style={styles.button}
                        >
                            <TouchableOpacity style={styles.button} activeOpacity={.7}>
                                <Text style={styles.buttonText}>Check out</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        );
    }
}

export default VoucherPromo;



