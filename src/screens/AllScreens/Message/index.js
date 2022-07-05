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

const backgroundImage = require('../../../assets/Message/Pattern.png');
const IconBack = require('../../../assets/Message/IconBack.png');
const PhotoProfile = require('../../../assets/Message/PhotoProfile.png');




class Message extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                    <TouchableOpacity activeOpacity={.7}>
                        <Image style={styles.IconBack} source={IconBack} />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Chat</Text>

                    <View style={styles.chatCon}>
                        <TouchableOpacity style={styles.chatRow} activeOpacity={.7}>
                            <Image style={styles.PhotoProfile} source={PhotoProfile} />
                            <View style={styles.chatTextCon}>
                                <View style={styles.chatText}>
                                    <Text style={styles.titleChat}>Anamwp</Text>
                                    <Text style={styles.chatTime}>20:00</Text>
                                </View>
                                <Text style={styles.subChat}>Your Order Just Arrived!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.chatCon}>
                        <TouchableOpacity style={styles.chatRow} activeOpacity={.7}>
                            <Image style={styles.PhotoProfile} source={PhotoProfile} />
                            <View style={styles.chatTextCon}>
                                <View style={styles.chatText}>
                                    <Text style={styles.titleChat}>Anamwp</Text>
                                    <Text style={styles.chatTime}>20:00</Text>
                                </View>
                                <Text style={styles.subChat}>Your Order Just Arrived!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.chatCon}>
                        <TouchableOpacity style={styles.chatRow} activeOpacity={.7}>
                            <Image style={styles.PhotoProfile} source={PhotoProfile} />
                            <View style={styles.chatTextCon}>
                                <View style={styles.chatText}>
                                    <Text style={styles.titleChat}>Anamwp</Text>
                                    <Text style={styles.chatTime}>20:00</Text>
                                </View>
                                <Text style={styles.subChat}>Your Order Just Arrived!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </ScrollView>
        );
    }
}

export default Message;



