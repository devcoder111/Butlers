import React, { Component } from "react";
import {
  Text,
  View,
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
import DiscoverStore from '../../../../../components/DiscoverStore/DiscoverStore'
import {
  Title,
  Label,
  Input,
  NavigationLink
} from "../../../../../components/Registration/components";
import NavigationHeader from "../../../../../components/Profile/components/NavigationHeader";
import { SafeAreaView, ScrollView } from "react-navigation";

class WrongAreaView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      subscribeClick: false
    };
  }

  onChange = text => {
    this.setState({ value: text });
  };

  onClear = () => {
    this.setState({ value: "" });
  };

  onSubscribe = () => {
    const { subscribeClick } = this.state;
    const { navigation } = this.props;
    this.setState({ subscribeClick: !subscribeClick });
    navigation.navigate("SubscribeArea");
  };

  navigateTo = link => {
    const { navigation } = this.props;
    navigation.navigate(link);
  };

  discoverShops = () => {
    this.setModalVisible();
  };

  render() {
    const { value, subscribeClick } = this.state;
    const { navigation } = this.props;

    return (
      <SafeAreaView style={{flex:1}}>
        <KeyboardAvoidingView
          automaticallyAdjustContentInsets={false}
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <NavigationHeader navigation={navigation} />

              {/* <Title color="#000">
              <Translate value="INTRO_neighbourhood_errorPageHeading" />
            </Title> */}

              <HeaderText value="INTRO_neighbourhood_errorPageHeading" />
              <SubDescription value="INTRO_neighbourhood_errorPageSubscribe" />

              {/* <View style={styles.titleView}>
              <Text style={styles.titleColor}>
                <Translate value="INTRO_neighbourhood_errorPageSubscribe" />
              </Text>
            </View> */}
              <View style={[styles.inputView, { marginTop: 80 }]}>
                <Input
                  placeholder='email address'
                  placeholderStyle={styles.placeholder}
                  onClear={this.onClear}
                  value={value}
                  onChangeText={this.onChange}
                />
              </View>
              {/* <View style={styles.marginTop30}>
             
              <TouchableOpacity onPress={value ? this.onSubscribe : null}>
                <View
                  style={[
                    styles.button,
                    { backgroundColor: value ? colors.green : colors.gray }
                  ]}
                >
                  <Text style={{ color: colors.white, fontSize: 15 }}>
                    <Translate value="INTRO_neighbourhood_errorPageButton" />
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.titleView}>
                <Text style={styles.titleColor}>
                  <Translate value="INTRO_neighbourhood_errorPageNearest" />
                </Text>
              </View>
            </View> */}
              <View style={{
                width: "100%",
                margin: 'auto',
                marginTop: 120,
                justifyContent: 'center',
              }}>
                <BottomButton onPress={value ? this.onSubscribe : null} border= {value ? '#2ED573' : '#D8D8D8'} background= {value ? '#2ED573' : '#D8D8D8'}>
                  <Text>
                    <Translate value="INTRO_neighbourhood_errorPageButton" />
                  </Text>
                </BottomButton>
                <DiscoverStore />
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
            </View> */}
              {/* <View style={styles.titleView}>
              <Text style={styles.titleColor}>
                <Translate value="INTRO_neighbourhood_errorPageRegisterLabel" />
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.navigateTo("Initials");
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
      </SafeAreaView>
    );
  }
}

export default WrongAreaView;
