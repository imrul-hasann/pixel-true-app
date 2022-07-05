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

const backgroundImage = require('../../../assets/SetLocation/Pattern.png');
const IconBack = require('../../../assets/SetLocation/IconBack.png');
const PinLogo = require('../../../assets/SetLocation/PinLogo.png');

class SetLocation extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <TouchableOpacity activeOpacity={.7}>
                        <Image style={styles.IconBack} source={IconBack} />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Set Your Location </Text>
                    <Text style={styles.titleSubText}>This data will be displayed in your account{"\n"} profile for security</Text>
                    <View style={styles.btn}>
                        <TouchableOpacity style={styles.btnLocation} activeOpacity={.7}>
                            <View style={styles.locationIconCon}>
                                <Image style={styles.PinLogo} source={PinLogo} />
                                <Text style={styles.locationText}>Your Location</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.setlocation} activeOpacity={.7}>
                            <Text style={styles.locationText}>Set Location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.submitButton}>
                        <LinearGradient
                            colors={['#53E88B', '#15BE77']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 1}}
                            style={styles.button}
                        >
                            <TouchableOpacity style={styles.button} activeOpacity={.7}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

export default SetLocation;



