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

const backgroundImage = require('../../../assets/ChatDetails/Pattern.png');
const IconBack = require('../../../assets/ChatDetails/IconBack.png');
const PhotoProfile = require('../../../assets/ChatDetails/PhotoProfile.png');
const Ellipse184 = require('../../../assets/ChatDetails/Ellipse184.png');
const CallLogo = require('../../../assets/ChatDetails/CallLogo.png');
const IconSend = require('../../../assets/ChatDetails/IconSend.png');


class ChatDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyWrapper}>
                    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image style={styles.IconBack} source={IconBack} />
                        </TouchableOpacity>
                        <Text style={styles.titleText}>Chat</Text>

                        <View style={styles.chatCon}>
                            <TouchableOpacity style={styles.chatRow} activeOpacity={.7}>
                                <View style={styles.chatTextCon}>
                                    <Image style={styles.PhotoProfile} source={PhotoProfile} />
                                    <View>
                                        <Text style={styles.titleChat}>Anamwp</Text>
                                        <View style={styles.chatTextConSub}>
                                            <Image style={styles.active} source={Ellipse184} />
                                            <Text style={styles.chatTime}>Online</Text>
                                        </View>
                                    </View>
                                </View>
                                <Image style={styles.CallLogo} source={CallLogo} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={styles.chatFromView}>
                            <View style={styles.chatFrom}>
                                <TouchableOpacity style={styles.chatTextRow} activeOpacity={.7}>
                                    <Text style={styles.chatToText}>Just to order</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.chatTo}>
                                <LinearGradient
                                    colors={['#53E88B', '#15BE77']}
                                    start={{x: 0, y: 0.5}}
                                    end={{x: 1, y: 1}}
                                    style={styles.chatTextToRow}
                                >
                                    <TouchableOpacity activeOpacity={.7}>
                                        <Text style={styles.chatFromText}>Okay, for what level of spiciness?</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View>
                <View style={styles.endWrapper}>
                    <View style={styles.sendRow}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type a massage ...."
                        />
                        <TouchableOpacity activeOpacity={.7}>
                            <Image style={styles.IconSend} source={IconSend} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default ChatDetails;



