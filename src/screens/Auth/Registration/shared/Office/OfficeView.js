import React from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import Translate from "@app/translations";

import {
  Title,
  Input,
  NavigationLink,
  ModalCompanyId,
} from "../../../../../components/Registration/components";
import NavigationHeader from "../../../../../components/Profile/components/NavigationHeader";
import BottomButton from '../../../../../components/BottomButton/BottomButton';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from "./styles";

const OfficeView = ({
  routeTo,
  navigation,
  forwardTo,
  onClear,
  onChange,
  onSwitch,
  companyId,
  modalVisible,
}) => {
  return (
    <KeyboardAvoidingView
      automaticallyAdjustContentInsets={false}
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <NavigationHeader
            onAction={() => {
              navigation.navigate(routeTo);
            }}
            navigation={navigation}
            routeTo={routeTo}
          >
            <Translate value="Skip" />
          </NavigationHeader>
          <Title color="#525255">
            <Translate value="SIGNUP_mail_officeHeading" />
          </Title>
          <View style={styles.titleView}>
            <Text style={styles.textColor}>
              <Translate value="SIGNUP_mail_officeText" />
            </Text>
          </View>

          <View style={styles.inputView}>
            <Input
              onClear={onClear}
              value={companyId}
              onChangeText={onChange}
              placeholder='Your company ID'
            />
          </View>
          <View style={styles.offerView}>
            <Icon name="questioncircle" size={20} color="#ddd" style={{marginRight: 10}}/>
            <NavigationLink linkTo={onSwitch} align="left" color="#2ED573">
              <Translate value="SIGNUP_mail_officePre" />
            </NavigationLink>
            <Text style={{ color: '#B5B7BA' }}>
              <Translate value="SIGNUP_mail_officeIdLink" />
            </Text>
          </View>

          <View style={{ marginTop: 50 }}>
            <BottomButton
              onPress={() => value = { companyId }, companyId && forwardTo}
              shadow= {companyId ? true : false}
              border={companyId ? '#2ED573' : '#D8D8D8'}
              background={companyId ? '#2ED573' : '#D8D8D8'}
              arrow='true'>
              <Text>
                CONTINUE
							</Text>
            </BottomButton>
          </View>
          <Modal transparent animationType="slide" visible={modalVisible}>
            <ModalCompanyId setModalVisible={onSwitch} />
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default OfficeView;
