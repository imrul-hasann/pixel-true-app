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

const backgroundImage = require('../../../assets/img/Pattern.png');
const photo = require('../../../assets/img/Image.png');
const Star = require('../../../assets/img/Star.png');
const editIcon = require('../../../assets/img/editIcon.png');

const PhotoProfile = require('../../../assets/ChatDetails/PhotoProfile.png');


class Call extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headWrapper}>
                    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>

                    </ImageBackground>
                </View>
                <View style={styles.bodyWrapper}>
                    <TouchableOpacity style={styles.photoBorder} activeOpacity={.7}>
                        <Image style={styles.backPhoto} source={photo} />
                        <Image style={styles.photo} source={PhotoProfile} />
                    </TouchableOpacity>
                    <View style={styles.textWarp}>
                        <Text style={styles.callerName}>Thank You!{"\n"}Order Completed</Text>
                        <Text style={styles.callerRing}>Please rate your last Driver</Text>
                    </View>
                    <View style={styles.starWarp}>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image style={styles.Star} source={Star} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image style={styles.Star} source={Star} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image style={styles.Star} source={Star} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image style={styles.Star} source={Star} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image style={styles.Star} source={Star} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.endWrapper}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.editButton}  activeOpacity={.7}>
                            <Image style={styles.edit} source={editIcon} />
                            <Text style={styles.leaveText}>Leave feedback</Text>
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
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <TouchableOpacity style={styles.skipButton} activeOpacity={.7}>
                            <Text style={styles.skipText}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Call;



