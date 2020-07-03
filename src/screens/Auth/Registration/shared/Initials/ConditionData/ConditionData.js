import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import Translate from "@app/translations";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Title } from "../../../../../../components/Registration/components";

import NavigationHeader from "../../../../../../components/Profile/components/NavigationHeader";
import { colors } from "../../../../../../styles";
import styles from "./styles";

const ConditionData = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[{ paddingHorizontal: 20 }, styles.container]}>
        <NavigationHeader navigation={navigation} onAction={() => {}} />
        <Title color={colors.black}>
          <Translate value="SIGNUP_mail_conditionsPage" />
        </Title>
        <Text style={styles.subtitle}>
          <Translate value="SIGNUP_mail_conditionsData" />
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ConditionData;
