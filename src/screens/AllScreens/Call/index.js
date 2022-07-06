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

const backgroundImage = require('../../../assets/call/Pattern.png');
const VolumeUp = require('../../../assets/call/VolumeUp.png');
const Group764 = require('../../../assets/call/Group764.png');

const PhotoProfile = require('../../../assets/ChatDetails/PhotoProfile.png');


class CallRinging extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headWrapper}>
                    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>

                    </ImageBackground>
                </View>
                <View style={styles.bodyWrapper}>
                    <TouchableOpacity style={styles.photoBorder} activeOpacity={.7}>
                        <Image style={styles.photo} source={PhotoProfile} />
                    </TouchableOpacity>
                    <Text style={styles.callerName}>Courtney Henry</Text>
                    <Text style={styles.callerRing}>Ringing . . .</Text>
                </View>
                <View style={styles.endWrapper}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonVolumeUp} activeOpacity={.7}>
                            <Image style={styles.VolumeUp} source={VolumeUp} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonEnd} activeOpacity={.7}>
                            <Image style={styles.cross} source={Group764} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default CallRinging;



