import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AllScreens from './src/screens/AllScreens/AllScreens';
import Onboarding_1 from "./src/screens/AllScreens/1.1 Onboarding";
import Onboarding_2 from "./src/screens/AllScreens/1.2 Onboarding";
import Onboarding_3 from "./src/screens/AllScreens/1.3 Onboarding";
import SignIn from "./src/screens/AllScreens/SignIn";
import SignUp from "./src/screens/AllScreens/SignUp";
import SignUpProcess from "./src/screens/AllScreens/SignUpProcess";
import PaymentMethod from "./src/screens/AllScreens/PaymentMethod";
import UploadPhoto from "./src/screens/AllScreens/UploadPhoto";
import UploadPreview from "./src/screens/AllScreens/UploadPreview";
import SetLocation from "./src/screens/AllScreens/SetLocation";
import SignUpSuccess from "./src/screens/AllScreens/SignUpSuccess";
import VerificationCode from "./src/screens/AllScreens/VerificationCode";
import ViaMethod from "./src/screens/AllScreens/ViaMethod";
import Password from "./src/screens/AllScreens/Password";
import SuccessNotification from "./src/screens/AllScreens/SuccessNotification";
import Home from "./src/screens/AllScreens/Home";
import Filter from "./src/screens/AllScreens/Filter";
import Message from "./src/screens/AllScreens/Message";
import ChatDetails from "./src/screens/AllScreens/ChatDetails";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<AllScreens />*/}
      {/*<Onboarding_1 />*/}
      {/*<Onboarding_2 />*/}
      {/*<Onboarding_3 />*/}
      {/*<SignIn />*/}
      {/*<SignUp />*/}
      {/*<SignUpProcess />*/}
      {/*<PaymentMethod />*/}
      {/*<UploadPhoto />*/}
      {/*<UploadPreview />*/}
      {/*<SetLocation />*/}
      {/*<SignUpSuccess />*/}
      {/*<VerificationCode />*/}
      {/*<ViaMethod />*/}
      {/*<Password />*/}
      {/*<SuccessNotification />*/}
      {/*<Home />*/}
      {/*<Filter />*/}
      {/*<Message />*/}
      <ChatDetails />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
