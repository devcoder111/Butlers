import React from "react";
import { SafeAreaView } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";
import { Title } from "../../../../../components/Registration/components";
import NavigationHeader from "../../../../../components/Profile/components/NavigationHeader";
import Translate from "@app/translations";

import { colors } from "../../../../../styles";

import styles from "./styles";
import PaymentsList from "../../../../../components/Profile/components/Payments/PaymentsList";
import AddNew from "../../../../../components/Profile/components/AddNew";

const PaymentsHomeView = ({ navigation, cards, onComponentFocus }) => {
  const certainCards = cards.filter((el) => {
    return el.brand === "visa" || el.brand === "mastercard";
  });
  const backScreen = navigation.getParam("backScreen");
  return (
    <ScrollView>
      <NavigationEvents
        onDidFocus={() => {
          onComponentFocus();
        }}
      />
      <SafeAreaView style={styles.container}>
        <NavigationHeader
          navigation={navigation}
          onAction={() => {}}
          onPress={() => {
            backScreen === "OrderConfirmation"
              ? navigation.navigate("OrderConfirmation")
              : navigation.goBack();
          }}
        />
        <Title color={colors.black}>
          <Translate value="PROFILE_paymentMethods_heading" />
        </Title>
        {cards ? (
          <PaymentsList navigation={navigation} data={certainCards} />
        ) : null}
        <AddNew
          navigateTo="AddPaymentMethod"
          navigation={navigation}
          title={<Translate value="PROFILE_paymentMethods_addNew" />}
          icon="plus"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default PaymentsHomeView;
