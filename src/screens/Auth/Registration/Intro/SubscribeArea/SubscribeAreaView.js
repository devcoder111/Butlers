import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";

import styles from "./styles";
import { colors } from "../../../../../styles/colors";
import Translate from "@app/translations";
import HeaderText from '../../../../../components/HeaderText/HeaderText';
import SubDescription from '../../../../../components/SubDescription/SubDescription';
import BottomButton from '../../../../../components/BottomButton/BottomButton'
import {
  Title,
  NavigationLink
} from "../../../../../components/Registration/components";
import NavigationHeader from "../../../../../components/Profile/components/NavigationHeader";
import { Header } from "react-native/Libraries/NewAppScreen";

class SubscribeAreaView extends Component {
  navigateTo = link => {
    const { navigation } = this.props;
    navigation.navigate(link);
  };

  discoverShops = () => {
    this.setModalVisible();
  };

  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView
        automaticallyAdjustContentInsets={false}
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <NavigationHeader navigation={navigation} />
            <View style={styles.imageWrap}>
              <Image source={require('../../../../../assets/Thankyou.png')} resizeMode="cover" />
            </View>

            <View style={{alignItems: 'center'}}>
              <HeaderText value="INTRO_thanks_heading" />
              <View>
                <SubDescription value="INTRO_neighbourhood_errorPageNearest" align='center'/>
              </View>
            </View>
            
            
            {/* <View style={styles.marginTop30}>
              <NavigationLink
                linkTo={() => {
                  this.navigateTo("StoreLocationsRegist");
                }}
                align="left"
                color="#000"
              >
                <Translate value="INTRO_neighbourhood_errorPageNearestLink" />
              </NavigationLink>
            </View>
            <View style={styles.titleView}>
              <Text style={styles.titleColor}>
                <Translate value="INTRO_neighbourhood_errorPageRegisterLabel" />
              </Text>
            </View> */}
            <View style={styles.discover}>
              <BottomButton onPress={() => { this.navigateTo("StoreLocationsRegist"); }} background='#2ED573' border='#2ED573'>
                    <Text>
                      <Translate value="INTRO_neighbourhood_errorPageNearestLink" />
                    </Text>
              </BottomButton>
              <View style={styles.createhere}>
                  <Text style={styles.signupLink} onPress={() => this.navigateTo("SignUp")}>Continue</Text> 
                  <Text style={{color: '#67686c'}}> with registration</Text>
              </View>              
            </View>

            {/* <TouchableOpacity
              onPress={() => {
                this.navigateTo("SignUp");
              }}
            >
              <View style={[styles.button, { backgroundColor: colors.green }]}>
                <Text style={{ color: colors.white, fontSize: 15 }}>
                  <Translate value="INTRO_neighbourhood_errorPageRegisterButton" />
                </Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default SubscribeAreaView;
