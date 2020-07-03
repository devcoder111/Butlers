/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Switch,
  Picker,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Translate from "@app/translations";
import DateTimePicker from "react-native-datepicker";
import { NavigationEvents } from "react-navigation";
import {
  ForwardButton,
  Title,
  Label,
} from "../../../../components/Registration/components";
import NavigationHeader from "../../../../components/Registration/components/NavigationHeader";
import { placeholdersHandler } from "../../../../constants/translations/index";

import OrderAddress from "./OrderAddress";

import { colors } from "../../../../styles";

import styles from "./styles";

const OrderCompletionView = ({
  setDate,
  navigation,
  isExpress,
  isAddressSame,
  address,
  houseNumber,
  floorNumber,
  postalNumber,
  onChange,
  onClear,
  forwardTo,
  toggleSwitch,
  dropOffDate,
  dropOffTime,
  pickUpDate,
  pickUpTime,
  showDropOffTime,
  showPickUpTime,
  onChangeSelect,
  validateDate,
  onAddCustomerLocation,
  checkLocationOnFocus,
  pick,
  drop,
  onSelectLocation,
  customerGroup,
  dropRanges,
  pickRanges,
  addressesAdded,
  pickAddress,
  dropAddress,
  pickStore,
  dropStore,
  customerLocations,
  butlersLocations,
  user,
  validateDateDifference,
  datesError,
  validatePastDate,
  allAddresses,
}) => {
  const pickup_location_id = navigation.getParam("dropStoreLoc", false);
  const delivery_location_id = navigation.getParam("pickStoreLoc", false);
  const dropLocation = pick || pickup_location_id;
  const pickLocation = delivery_location_id || drop;
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dropOffCustomerLocation = customerLocations.find(
    (el) => el.id === allAddresses.dropAddress
  );
  const pickUpCustomerLocation = customerLocations.find(
    (el) => el.id === allAddresses.pickAddress
  );
  const dropOffLocation = butlersLocations.find((el) => el.id === allAddresses.dropStore);
  const pickUpLocation = butlersLocations.find((el) => el.id === allAddresses.pickStore);

  const currentCustomerGroup =
    dropOffCustomerLocation || dropOffLocation
      ? customerGroup.customer_group
      : customerGroup.company_customer_group
      ? customerGroup.company_customer_group
      : customerGroup.customer_group;

  const currentCustomerGroupPickup =
    pickUpCustomerLocation || pickUpLocation
      ? customerGroup.customer_group
      : customerGroup.company_customer_group
      ? customerGroup.company_customer_group
      : customerGroup.customer_group;

  const availableDropRanges = dropRanges.filter((item) => {
    return (item.is_delivery = 1);
  });
  const availablePickRanges = pickRanges.filter((item) => {
    return (item.is_pickup = 1);
  });

  const findWrongDays = (custGroup) => {
    let wrongDays = "";
    const testWrongDays = custGroup.delivery_days;

    const disableDays = testWrongDays.filter((el) => {
      return el.is_active === 0;
    });
    disableDays.forEach((el) => {
      wrongDays += `${weekDays[el.day_number - 1]} `;
    });
    return wrongDays;
  };
  const roundNum = (x, n) => {
    if (isNaN(x) || isNaN(n)) return false;
    const result = (+x).toFixed(n).replace(".", ",");
    const out = result
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
      .split(" ")
      .join(".");
    return out;
  };
  const datepickerDropStyles = {
    dateIcon: {
      width: 0,
      height: 0,
    },
    dateInput: {
      borderWidth: 0,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    dateTouchBody: {
      textAlign: "left",
    },
    dateText: {
      fontSize: 18,
      paddingLeft: 0,
      paddingRight: 20,
      paddingTop: Platform.OS === "ios" ? 10 : 0,
      paddingBottom: 0,
      color: validateDate(dropOffDate, currentCustomerGroup)
        ? "red"
        : colors.black,
    },
    placeholderText: {
      fontSize: 18,
    },
    // datePickerCon: {
    // 	marginLeft: 100,
    // },
    // datePicker: {
    // 	width: '205%',
    // },
    btnTextConfirm: {
      color: colors.green,
      fontSize: 16,
      fontWeight: "400",
    },
  };
  const datepickerPickStyles = {
    dateIcon: {
      width: 0,
      height: 0,
    },
    dateInput: {
      borderWidth: 0,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    dateTouchBody: {
      textAlign: "left",
    },
    dateText: {
      fontSize: 18,
      paddingLeft: 0,
      paddingRight: 20,
      paddingTop: Platform.OS === "ios" ? 10 : 0,
      paddingBottom: 0,
      color: validateDate(pickUpDate, currentCustomerGroupPickup)
        ? "red"
        : colors.black,
    },
    placeholderText: {
      fontSize: 18,
    },
    // datePickerCon: {
    // 	backgroundColor: colors.gray,
    // 	borderWidth: 0,
    // },
    // datePicker: {
    // 	width: '205%',
    // },
    btnTextConfirm: {
      color: colors.green,
      fontSize: 16,
      fontWeight: "400",
    },
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationEvents
        onWillFocus={() => {
          checkLocationOnFocus();
        }}
      />
      <NavigationHeader
        headerName="Order Completion"
        navigation={navigation}
        onAction={() => {}}
      />
      <ScrollView>
        <View style={styles.container}>
          <Title color={colors.black}>
            <Translate value="BASKET_orderCompletion_heading" />
          </Title>
          <View style={styles.subtitle}>
            <Text>
              <Translate value="BASKET_orderCompletion_chooseText" />
            </Text>
          </View>
          <OrderAddress
            isAddressSame={isAddressSame}
            address={address}
            houseNumber={houseNumber}
            floorNumber={floorNumber}
            postalNumber={postalNumber}
            onChange={onChange}
            onClear={onClear}
            onAddCustomerLocation={onAddCustomerLocation}
            onSelectLocation={onSelectLocation}
            user={user}
            dropOffCustomerLocation={dropOffCustomerLocation}
            pickUpCustomerLocation={pickUpCustomerLocation}
            dropOffLocation={dropOffLocation}
            pickUpLocation={pickUpLocation}
          />

          <View style={styles.isSameAddress}>
            <View style={styles.isAdressSameTitleView}>
              <Text>
                <Translate value="BASKET_orderCompletion_switchAdressLabel" />
              </Text>
            </View>
            <View>
              <Switch
				onValueChange={toggleSwitch("isAddressSame")}
                value={isAddressSame}
                trackColor={{ true: colors.green }}
              />
            </View>
          </View>
          {dropOffLocation &&
          pickUpLocation ? null : currentCustomerGroup.allow_express_delivery ===
            1 ? (
            <View style={styles.isSameAddress}>
              <View style={styles.isAdressSameTitleView}>
                <View style={styles.express}>
                  <Text style={styles.expressText}>
                    <Translate value="BASKET_orderCompletion_switchExpressLabel" />
                  </Text>
                  <Text>
                    <Translate value="BASKET_orderCompletion_expressExtraFee" />{" "}
                    {roundNum(
                      `${Number(
                        dropOffLocation
                          ? "0"
                          : currentCustomerGroup.express_delivery_price
                      ) +
                        Number(
                          pickUpLocation
                            ? "0"
                            : currentCustomerGroupPickup.express_delivery_price
                        )}`,
                      2
                    )}{" "}
                    DKK
                  </Text>
                </View>
              </View>
              <View>
                <Switch
                  onValueChange={toggleSwitch("isExpress")}
                  value={isExpress}
                  trackColor={{ true: colors.green }}
                />
              </View>
            </View>
          ) : null}

          {dropOffLocation ? null : (
            <View style={styles.midLane}>
              <View style={styles.houseNumber}>
                <View style={styles.labelView}>
                  <Label color={colors.gray}>
                    <Translate value="BASKET_orderCompletion_dropOffLabel" />:
                  </Label>
                </View>
                <View style={styles.inputView}>
                  <DateTimePicker
                    value={dropOffDate}
                    date={dropOffDate}
                    mode="date"
                    display="default"
                    confirmBtnText="Done"
                    cancelBtnText=""
                    onDateChange={setDate("dropOffDate", "showDropOffDate")}
                    showIcon={false}
                    customStyles={datepickerDropStyles}
                    format="Do MMMM, dddd"
                  />
                </View>
              </View>
              <View style={styles.pickTime}>
                <View style={styles.inputView}>
                  <View style={styles.containerPicker}>
                    <Picker
                      selectedValue={dropOffTime}
                      style={{ height: 30, width: 170 }}
                      onValueChange={(itemValue, itemIndex) => {
                        onChangeSelect("dropOffTime", itemValue, itemIndex);
                      }}
                    >
                      {availableDropRanges.length ? (
                        availableDropRanges.map((el) => {
                          return (
                            <Picker.Item
                              label={`from ${el.hour_from} to ${el.hour_to}`}
                              value={`from ${el.hour_from} to ${el.hour_to}`}
                              key={`from ${el.hour_from} to ${el.hour_to}`}
                            />
                          );
                        })
                      ) : (
                        <Picker.Item
                          label={dropOffTime}
                          value={dropOffTime}
                          key={dropOffTime}
                        />
                      )}
                    </Picker>
                  </View>
                </View>
              </View>
            </View>
          )}
          {pickUpLocation ? null : (
            <View style={styles.midLane}>
              <View style={styles.houseNumber}>
                <View style={styles.labelView}>
                  <Label color={colors.gray}>
                    <Translate value="BASKET_orderCompletion_pickUpLabel" />:
                  </Label>
                </View>
                <View style={styles.inputView}>
                  <DateTimePicker
                    value={pickUpDate}
                    date={pickUpDate}
                    mode="date"
                    is24Hour
                    display="default"
                    onChange={setDate("pickUpDate", "showPickUpDate")}
                    confirmBtnText="Done"
                    cancelBtnText=""
                    onDateChange={setDate("pickUpDate", "showPickUpDate")}
                    showIcon={false}
                    customStyles={datepickerPickStyles}
                    format="Do MMMM, dddd"
                  />
                </View>
              </View>
              <View style={styles.pickTime}>
                <View style={styles.inputView}>
                  <View style={styles.containerPicker}>
                    <Picker
                      selectedValue={pickUpTime}
                      style={{ height: 30, width: 170 }}
                      onValueChange={(itemValue, itemIndex) => {
                        onChangeSelect("pickUpTime", itemValue, itemIndex);
                      }}
                    >
                      {availablePickRanges.length ? (
                        availablePickRanges.map((el) => {
                          return (
                            <Picker.Item
                              label={`from ${el.hour_from} to ${el.hour_to}`}
                              value={`from ${el.hour_from} to ${el.hour_to}`}
                              key={`from ${el.hour_from} to ${el.hour_to}`}
                            />
                          );
                        })
                      ) : (
                        <Picker.Item
                          label={pickUpTime}
                          value={pickUpTime}
                          key={pickUpTime}
                        />
                      )}
                    </Picker>
                  </View>
                </View>
              </View>
            </View>
          )}
          {isAddressSame ? (
            validateDate(dropOffDate, currentCustomerGroup) ||
            validateDate(pickUpDate, currentCustomerGroupPickup) ? (
              <View>
                <Text style={[{ color: "red", marginTop: 10 }]}>
                  Choose another day ( not available:{" "}
                  {findWrongDays(currentCustomerGroup)})
                </Text>
              </View>
            ) : !validateDateDifference(currentCustomerGroup) ? (
              !dropOffLocation && !pickUpLocation ? (
                <View>
                  <Text style={[{ color: "red", marginTop: 10 }]}>
                    You can't pick up on this day
                  </Text>
                </View>
              ) : null
            ) : !validatePastDate("showDropOffDate") ? (
              <View>
                <Text style={[{ color: "red", marginTop: 10 }]}>
                  You can't choose today or past days
                </Text>
              </View>
            ) : null
          ) : (
            <View>
              {validateDate(dropOffDate, currentCustomerGroup) ? (
                <View>
                  <Text style={[{ color: "red", marginTop: 10 }]}>
                    Choose another day ( not available for dropping off:{" "}
                    {findWrongDays(currentCustomerGroup)})
                  </Text>
                </View>
              ) : null}
              {validateDate(pickUpDate, currentCustomerGroupPickup) ? (
                <View>
                  <Text style={[{ color: "red", marginTop: 10 }]}>
                    Choose another day ( not available for picking up:{" "}
                    {findWrongDays(currentCustomerGroupPickup)})
                  </Text>
                </View>
              ) : !validateDateDifference(currentCustomerGroupPickup) ? (
                !dropOffLocation && !pickUpLocation ? (
                  <View>
                    <Text style={[{ color: "red", marginTop: 10 }]}>
                      You can't pick up on this day
                    </Text>
                  </View>
                ) : null
              ) : !validatePastDate("showDropOffDate") ? (
                <View>
                  <Text style={[{ color: "red", marginTop: 10 }]}>
                    You can't choose today or past days
                  </Text>
                </View>
              ) : !validatePastDate("showPickUpDate") ? (
                <View>
                  <Text style={[{ color: "red", marginTop: 10 }]}>
                    You can't choose today or past days
                  </Text>
                </View>
              ) : null}
            </View>
          )}
          <View style={styles.forwardView}>
            <ForwardButton
              colorText={colors.white}
              backgroundColorText={colors.green}
              value={
                addressesAdded &&
                (!dropOffLocation && !pickUpLocation && addressesAdded
                  ? validateDateDifference(currentCustomerGroup) &&
                    validatePastDate("showDropOffDate") &&
                    !validateDate(dropOffDate, currentCustomerGroup) &&
                    !validateDate(pickUpDate, currentCustomerGroupPickup) &&
                    dropOffTime &&
                    pickUpTime &&
                    true
                  : dropOffLocation && !pickUpLocation && addressesAdded
                  ? validatePastDate("showPickUpDate") &&
                    !validateDate(pickUpDate, currentCustomerGroupPickup) &&
                    pickUpTime &&
                    true
                  : !dropOffLocation && pickUpLocation && addressesAdded
                  ? validatePastDate("showDropOffDate") &&
                    !validateDate(dropOffDate, currentCustomerGroup) &&
                    dropOffTime &&
                    true
                  : dropOffLocation && pickUpLocation && addressesAdded
                  ? true
                  : false)
              }
              forwardTo={forwardTo}
            />
          </View>
        </View>
      </ScrollView>
      {Platform.OS === "ios" ? (
        <View style={styles.pickers}>
          <Modal animationType="slide" transparent visible={showDropOffTime}>
            <View style={styles.modalContainer}>
              <View style={styles.pickerContainer}>
                <TouchableWithoutFeedback
                  onPress={toggleSwitch("showDropOffTime")}
                >
                  <Text style={styles.pickerCancel}>
                    <Translate value="TAILORING_uploadPicture_cancelSelect" />
                  </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={toggleSwitch("showDropOffTime")}
                >
                  <Text style={styles.pickerConfirm}>
                    <Translate value="PROFILE_selectCardToPay_successButton" />
                  </Text>
                </TouchableWithoutFeedback>
              </View>
              <Picker
                selectedValue={dropOffTime}
                onValueChange={(itemValue, itemIndex) =>
                  onChangeSelect("dropOffTime", itemValue, itemIndex)
                }
              >
                {availableDropRanges
                  ? availableDropRanges.map((el) => {
                      return (
                        <Picker.Item
                          label={`from ${el.hour_from} to ${el.hour_to}`}
                          value={`from ${el.hour_from} to ${el.hour_to}`}
                          key={`from ${el.hour_from} to ${el.hour_to}`}
                        />
                      );
                    })
                  : null}
              </Picker>
            </View>
          </Modal>

          <Modal animationType="slide" transparent visible={showPickUpTime}>
            <View style={styles.modalContainer}>
              <View style={styles.pickerContainer}>
                <TouchableWithoutFeedback
                  onPress={toggleSwitch("showPickUpTime")}
                >
                  <Text style={styles.pickerCancel}>
                    <Translate value="TAILORING_uploadPicture_cancelSelect" />
                  </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={toggleSwitch("showPickUpTime")}
                >
                  <Text style={styles.pickerConfirm}>
                    <Translate value="PROFILE_selectCardToPay_successButton" />
                  </Text>
                </TouchableWithoutFeedback>
              </View>
              <Picker
                selectedValue={pickUpTime}
                onValueChange={(itemValue, itemIndex) => {
                  onChangeSelect("pickUpTime", itemValue, itemIndex);
                }}
              >
                {availablePickRanges
                  ? availablePickRanges.map((el) => {
                      return (
                        <Picker.Item
                          label={`from ${el.hour_from} to ${el.hour_to}`}
                          value={`from ${el.hour_from} to ${el.hour_to}`}
                          key={`from ${el.hour_from} to ${el.hour_to}`}
                        />
                      );
                    })
                  : null}
              </Picker>
            </View>
          </Modal>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default OrderCompletionView;
