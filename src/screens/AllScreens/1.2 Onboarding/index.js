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
import { LinearGradient } from 'expo-linear-gradient';

const banner = require('../../../assets/Onboarding_2/Illustartion.png');


class Onboarding extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.banner} source={banner} />
                <View style={styles.text}>
                    <Text style={styles.subText}>Find your Comfort{"\n"}Food here</Text>
                    <Text style={styles.title}>Here You Can find a chef or dish for every{"\n"}taste and color. Enjoy!</Text>
                </View>
                <View style={styles.nextButton}>
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
            </View>
        );
    }
}

export default Onboarding;



