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

const backgroundImage = require('../../../assets/ViaMethod/Pattern.png');
const IconBack = require('../../../assets/ViaMethod/IconBack.png');
const Message = require('../../../assets/ViaMethod/Message.png');
const Email = require('../../../assets/ViaMethod/Email.png');


class ViaMethod extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <TouchableOpacity activeOpacity={.7}>
                        <Image style={styles.IconBack} source={IconBack} />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Forgot password?</Text>
                    <Text style={styles.titleSubText}>Select which contact details should we{"\n"}use to reset your password</Text>
                    <View style={styles.btn}>
                        <View style={styles.codeBox}>
                            <Image style={styles.Message} source={Message} />
                            <View>
                                <Text style={styles.titleSub}>Via sms:</Text>
                                <Text style={styles.titleSub}><Text style={styles.titleTextDot}>. . . .  . . . .</Text>{'     '}4235</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.btn}>
                        <View style={styles.codeBox}>
                            <Image style={styles.Message} source={Email} />
                            <View>
                                <Text style={styles.titleSub}>Via email:</Text>
                                <Text style={styles.titleSub}><Text style={styles.titleTextDot}>. . . .</Text>{'     '}@gmail.com</Text>
                            </View>
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

export default ViaMethod;



