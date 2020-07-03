import React from "react";
import { SafeAreaView, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import Translate from "@app/translations";
import { Title } from "../../../../../components/Registration/components";
import NavigationHeader from "../../../../../components/Profile/components/NavigationHeader";

import PaymentsListItem from "../../../../../components/Profile/components/Payments/PaymentsListItem/PaymentsListItemContainer";

import { colors } from "../../../../../styles";

import styles from "./styles";

const AddPaymentMethodView = ({ navigation, data }) => {
  const backScreen = navigation.getParam("backScreen");
  console.log(navigation);
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <NavigationHeader
          navigation={navigation}
          onAction={() => {}}
          onPress={() => {
            if (backScreen) {
              navigation.navigate("OrderConfirmation");
            } else navigation.goBack();
          }}
        />
        <Title color={colors.black}>
          <Translate value="PROFILE_paymentMethods_addNew" />
        </Title>
        <View style={styles.topBorder}>
          {data.map((item) => (
            <PaymentsListItem data={item} navigation={navigation} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AddPaymentMethodView;
