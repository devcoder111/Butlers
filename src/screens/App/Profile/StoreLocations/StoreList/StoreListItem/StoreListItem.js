import React from "react";
import { View, Text } from "react-native";

import Touchable from "../../../../../../components/Touchable/Touchable";

import styles from "./styles";

const StoreListItem = ({ item, navigation, onLocationZoom }) => {
  const orderCondit = navigation.state.params;
  return (
    <Touchable
      onPress={() => {
        if (orderCondit) {
          if (orderCondit.location === "both") {
            navigation.navigate("OrderCompletion", {
              dropStoreLoc: item.id,
              pickStoreLoc: item.id,
              pick: false,
              drop: false
            });
          } else if (orderCondit.location === "drop") {
            navigation.navigate("OrderCompletion", {
              dropStoreLoc: item.id,
              drop: false
            });
          } else if (orderCondit.location === "pick") {
            navigation.navigate("OrderCompletion", {
              pickStoreLoc: item.id,
              pick: false
            });
          }
        } else {
          onLocationZoom(item);
        }
        //  else {
        // 	navigation.navigate('StoreInfo', {
        // 		item,
        // 	})
        // }
      }}
    >
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
