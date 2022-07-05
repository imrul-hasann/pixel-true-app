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

const backgroundImage = require('../../../assets/SignIn/Pattern.png');
const logo = require('../../../assets/SignIn/Logo.png');
const facebook = require('../../../assets/SignIn/facebook.png');
const google = require('../../../assets/SignIn/google.png');
const ForgotPasswordLink = require('../../../assets/SignIn/ForgotPasswordLink.png');


class SignIn extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <Image style={styles.logo} source={logo} />
                    <Text style={styles.logInText}>Login To Your Account</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email"
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textInput}
                            placeholder="Password"
                        />
                    </View>
                    <Text style={styles.continueText}>Or Continue With</Text>
                    <View style={styles.socialButton}>
                        <TouchableOpacity style={styles.faceBookButton} activeOpacity={.7}>
                            <Image style={styles.facebook} source={facebook} />
                            <Text style={styles.buttonText}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.faceBookButton} activeOpacity={.7}>
                            <Image style={styles.facebook} source={google} />
                            <Text style={styles.buttonText}>Google</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.forgetPass} activeOpacity={.7}>
                        <Image style={styles.ForgotPasswordLink} source={ForgotPasswordLink} />
                    </TouchableOpacity>

                    <View style={styles.LoginButton}>
                        <LinearGradient
                            colors={['#53E88B', '#15BE77']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 1}}
                            style={styles.button}
                        >
                            <TouchableOpacity style={styles.button} activeOpacity={.7}>
                                <Text style={styles.buttonLoginText}>Login</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </ImageBackground>
            </View>
        );
    }
}

export default SignIn;



