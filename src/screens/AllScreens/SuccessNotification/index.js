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

const backgroundImage = require('../../../assets/SuccessNotification/Pattern.png');
const Illustration = require('../../../assets/SuccessNotification/Illustration.png');
const Ordercompleted = require('../../../assets/SuccessNotification/Ordercompleted.png');

class SuccessNotification extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <View style={styles.btn}>
                        <Image style={styles.Illustration} source={Illustration} />
                        <Image style={styles.Ordercompleted} source={Ordercompleted} />

                        <Text style={styles.titleSubText}>Password reset succesful</Text>
                    </View>
                    <View style={styles.submitButton}>
                        <LinearGradient
                            colors={['#53E88B', '#15BE77']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 1}}
                            style={styles.button}
                        >
                            <TouchableOpacity style={styles.button} activeOpacity={.7}>
                                <Text style={styles.buttonText}>Back</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

export default SuccessNotification;



