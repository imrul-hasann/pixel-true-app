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

const backgroundImage = require('../../../assets/Password/Pattern.png');
const IconBack = require('../../../assets/Password/IconBack.png');
const EyeIcon = require('../../../assets/Password/EyeIcon.png');
const EyeIconDis = require('../../../assets/Password/EyeIconDis.png');


class Password extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <TouchableOpacity activeOpacity={.7}>
                        <Image style={styles.IconBack} source={IconBack} />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Reset your password{"\n"}here</Text>
                    <Text style={styles.titleSubText}>Select which contact details should we{"\n"}use to reset your password</Text>
                    <View style={styles.singleInputContainer}>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.passInput}
                            placeholder="New Password"
                        />
                        <Image style={styles.passInputIcon} source={EyeIcon} />
                    </View>
                    <View style={styles.singleInputContainer}>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.passInput}
                            placeholder="New Password"
                        />
                        <Image style={styles.passInputIcon} source={EyeIconDis} />
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

export default Password;



