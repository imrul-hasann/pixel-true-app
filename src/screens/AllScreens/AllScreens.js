import * as React from 'react';
import {
    Text ,
    View ,
    Image ,
    ScrollView ,
    StyleSheet ,
    TouchableOpacity ,
    TextInput,
    SafeAreaView,
    Button
} from 'react-native';
import styles from './styles';

import Onboarding_1 from './1.1 Onboarding/index';


// const Onboarding = require('../../images/SocialogueSymbol.png');


class AllScreens extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/*<TouchableOpacity style={styles.button} activeOpacity={.7}>*/}
                    {/*    <Text style={styles.buttonText}>Onboarding 1.1</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity style={styles.button} activeOpacity={.7}>*/}
                    {/*    <Text style={styles.buttonText}>Onboarding 1.2</Text>*/}
                    {/*</TouchableOpacity>*/}

                </ScrollView>
            </View>
        );
    }
}

export default AllScreens;



