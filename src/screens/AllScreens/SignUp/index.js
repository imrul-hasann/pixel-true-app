import React, { useState } from 'react';

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
import Checkbox from 'expo-checkbox';

const backgroundImage = require('../../../assets/SignUp/Pattern.png');
const logo = require('../../../assets/SignUp/Logo.png');
const Profile = require('../../../assets/SignUp/Profile.png');
const Message = require('../../../assets/SignUp/Message.png');
const Lock = require('../../../assets/SignUp/Lock.png');
const Show = require('../../../assets/SignUp/Show.png');
const CheckListIcon = require('../../../assets/SignUp/CheckListIcon.png');
const CreateAc = require('../../../assets/SignUp/CreateAc.png');


export default function SighUp() {
    const [isChecked, setChecked] = useState(false);
    return (
            <View style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <Image style={styles.logo} source={logo} />
                    <Text style={styles.logInText}>Sign Up For Free </Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.singleInputContainer}>
                            <Image style={styles.inputIcon} source={Profile} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Anamwp . . |"
                            />
                        </View>
                        <View style={styles.singleInputContainer}>
                            <Image style={styles.inputIcon} source={Message} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Email"
                            />
                        </View>
                        <View style={styles.singleInputContainer}>
                            <Image style={styles.inputIcon} source={Lock} />
                            <TextInput
                                secureTextEntry={true}
                                style={styles.passInput}
                                placeholder="Password"
                            />
                            <Image style={styles.passInputIcon} source={Show} />
                        </View>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#15BE77' : undefined}
                        />
                        <Text style={styles.CheckListIconText}>Keep Me Signed In</Text>
                    </View>
                    <View style={styles.checkList}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#15BE77' : undefined}
                        />
                        <Text style={styles.CheckListIconText}>Email Me About Special Pricing</Text>
                    </View>
                    <View style={styles.LoginButton}>
                        <LinearGradient
                            colors={['#53E88B', '#15BE77']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 1}}
                            style={styles.button}
                        >
                            <TouchableOpacity style={styles.button} activeOpacity={.7}>
                                <Text style={styles.buttonLoginText}>Create Account</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    <TouchableOpacity style={styles.forgetPass} activeOpacity={.7}>
                        <Image style={styles.ForgotPasswordLink} source={CreateAc} />
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        );
}





