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

const backgroundImage = require('../../../assets/PaymentMethod/Pattern.png');
const IconBack = require('../../../assets/PaymentMethod/IconBack.png');
const visa = require('../../../assets/PaymentMethod/visa.png');
const Payoneer_logo = require('../../../assets/PaymentMethod/Payoneer_logo.png');
const paypal = require('../../../assets/PaymentMethod/paypal.png');



class PaymentMethod extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <TouchableOpacity activeOpacity={.7}>
                        <Image style={styles.IconBack} source={IconBack} />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Payment Method</Text>
                    <Text style={styles.titleSubText}>This data will be displayed in your account{"\n"} profile for security</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} activeOpacity={.7}>
                            <Image style={styles.paypalImg} source={paypal} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} activeOpacity={.7}>
                            <Image style={styles.visaImg} source={visa} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} activeOpacity={.7}>
                            <Image style={styles.PayoneerImg} source={Payoneer_logo} />
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

export default PaymentMethod;



