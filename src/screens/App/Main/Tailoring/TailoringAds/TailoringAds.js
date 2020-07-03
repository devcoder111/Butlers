import React, { Component } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import Translate from "@app/translations";

import { colors } from "../../../../../styles";

import Basket from "../../../../../components/Cleaning/BasketButton";

import styles from "./styles";

class TailoringAds extends Component {
  render() {
    const { navigation, submitClean, rejectClean } = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.bar}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Icon color={colors.black} name="arrow-left" size={25} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <EvilIcon color={colors.black} name="close" size={40} />
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.title}>
          <Translate value="TAIOLRING_beforeFinish_heading" />
        </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            submitClean();
          }}
        >
          <View style={styles.yesButton}>
            <Text style={styles.yesText}>
              <Translate value="TAIOLRING_beforeFinish_submitClean" />
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            rejectClean();
          }}
        >
          <View style={styles.noButton}>
            <Text style={styles.noText}>
              <Translate value="TAIOLRING_beforeFinish_rejectClean" />
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Basket navigateTo={() => navigation.navigate("Basket")} />
      </SafeAreaView>
    );
  }
}

export default TailoringAds;
