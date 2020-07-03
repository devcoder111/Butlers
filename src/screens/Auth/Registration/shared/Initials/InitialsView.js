import React from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Switch,
  Image,
  CheckBox
} from "react-native";
import Translate from "@app/translations";
import {
  Title,
  Input
} from "../../../../../components/Registration/components";
import NavigationHeader from "../../../../../components/Profile/components/NavigationHeader";
import BottomButton from '../../../../../components/BottomButton/BottomButton';
import Icon from "../../../../../assets";
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';

import styles from "./styles";
import { colors } from "../../../../../styles";

const InitialsView = ({
  navigation,
  forwardTo,
  firstName,
  lastName,
  onClear,
  onChange,
  onCondition,
  toggleSwitch,
  isAccepted='true',
}) => {
  return (
    <KeyboardAvoidingView
      automaticallyAdjustContentInsets={false}
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <NavigationHeader navigation={navigation} />
          <Title color="#525255">
            <Translate value="SIGNUP_mail_nameHeading" />{" "}
          </Title>
          <View style={[styles.inputView, { marginTop: 80 }]}>
            <Input
              onClear={() => onClear("firstName")}
              value={firstName}
              onChangeText={onChange("firstName")}
              placeholder="First name"
            />
          </View>
          <View style={styles.inputView}>
            <Input
              onClear={() => onClear("lastName")}
              value={lastName}
              onChangeText={onChange("lastName")}
              placeholder='Last name'
            />
          </View>
          <View style={{ marginTop: 30, flexDirection: "row" }}>
            <View>
              <CircleCheckBox
                checked={isAccepted}
                innerColor='#2ED573'
                outerColor='#8B8C8E'
                onToggle={toggleSwitch("isAccepted")}
                labelPosition={LABEL_POSITION.RIGHT}
                label=" "
              />
            </View>
            <Text style={styles.linkColor}>
              <Translate value="SIGNUP_mail_termsLabel" />{" "}
              <TouchableWithoutFeedback onPress={onCondition}>
                <Text style={[styles.textColor, styles.terms]}>
                  <Translate value="SIGNUP_mail_termsLabelSecond" />
                </Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>

          <View style={styles.ButtonPosition}>

            <BottomButton onPress={firstName && lastName && isAccepted && forwardTo}
              shadow= {firstName && lastName && isAccepted ? true : false}
              border={firstName && lastName && isAccepted ? '#2ED573' : '#D8D8D8'}
              background={firstName && lastName && isAccepted ? '#2ED573' : '#D8D8D8'}
              arrow='true'>
              <Text>
                CONTINUE
              </Text>
            </BottomButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InitialsView;
