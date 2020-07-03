import React, { Component } from "react";

import { View, Text, TouchableWithoutFeedback } from "react-native";

import Translate from "@app/translations";
import styles from "./styles";

class PaymentView extends Component {
  render() {
    const { navigation, cards } = this.props;
    const mockCard = cards.find((item) => item.is_default === 1);
    return (
      <View style={styles.container}>
        {mockCard ? (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("PaymentsHome", {
                backScreen: "OrderConfirmation",
              });
            }}
          >
            <View style={styles.touchablePayment}>
              <View style={styles.row}>
                <Text style={styles.header}>
                  <Translate value="BASKET_orderConfirmation_paymentMethod" />
                </Text>
                <Text style={styles.edit}><Translate value="Edit" /></Text>
              </View>
              <View style={styles.addressView}>
                <Text style={styles.label}>
                  {mockCard.brand.toUpperCase()} *{mockCard.last_4}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("AddPaymentMethod", {
                backScreen: "OrderConfirmation",
              });
            }}
          >
            <View style={styles.touchablePayment}>
              <View style={styles.row}>
                <Text style={styles.header}>
                  <Translate value="BASKET_orderConfirmation_paymentMethod" />
                </Text>
                <Text style={styles.edit}><Translate value="Edit" /></Text>
              </View>
              <View style={styles.addressView}>
                <Text style={styles.label}>
                <Translate value="BASKET_orderConfirmation_paymentMethodEmpty" />
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    );
  }
}

export default PaymentView;
