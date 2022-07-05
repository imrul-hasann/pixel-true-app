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

const backgroundImage = require('../../../assets/UploadPhoto/Pattern.png');
const IconBack = require('../../../assets/UploadPhoto/IconBack.png');
const GalleryIcon = require('../../../assets/UploadPhoto/GalleryIcon.png');
const CameraIcon = require('../../../assets/UploadPhoto/CameraIcon.png');

class UploadPhoto extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <TouchableOpacity activeOpacity={.7}>
                        <Image style={styles.IconBack} source={IconBack} />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Upload Your Photo{"\n"}Profile</Text>
                    <Text style={styles.titleSubText}>This data will be displayed in your account{"\n"} profile for security</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} activeOpacity={.7}>
                            <Image style={styles.Icon} source={GalleryIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} activeOpacity={.7}>
                            <Image style={styles.Icon} source={CameraIcon} />
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
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

export default UploadPhoto;



