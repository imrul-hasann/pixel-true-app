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

const backgroundImage = require('../../../assets/VerificationCode/Pattern.png');
const IconBack = require('../../../assets/VerificationCode/IconBack.png');


class VerificationCode extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <TouchableOpacity activeOpacity={.7}>
                        <Image style={styles.IconBack} source={IconBack} />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Enter 4-digit{"\n"}Verification code</Text>
                    <Text style={styles.titleSubText}>Code send to +6282045**** . This code will{"\n"}expired in 01:30</Text>
                    <View style={styles.btn}>
                        <View style={styles.codeBox}>
                            <Text style={styles.titleText}>1</Text>
                            <Text style={styles.titleText}>9</Text>
                            <Text style={styles.titleText}>2</Text>
                            <Text style={styles.titleText}>3</Text>
                        </View>
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

export default VerificationCode;



