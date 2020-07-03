import React from "react";
import { View, Text } from "react-native";

import Touchable from "../../../../../../../components/Touchable/Touchable";

import styles from "./styles";

const StoreListItem = ({ item, navigation, onLocationZoom }) => {
  return (
    <Touchable onPress={() => onLocationZoom(item)}>
      <View style={styles.itemWrap}>
        <Text style={styles.itemBold}>
          {item.name}
          <Text style={styles.itemText}>, {item.address}</Text>
        </Text>
      </View>
    </Touchable>
  );
};

export default StoreListItem;
