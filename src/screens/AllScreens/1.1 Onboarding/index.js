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

const backgroundImage = require('../../../assets/Onboarding_1/Pattern.png');
const logo = require('../../../assets/Onboarding_1/Logo.png');


class Onboarding extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <Image style={styles.logo} source={logo} />
                </ImageBackground>
            </View>
        );
    }
}

export default Onboarding;



