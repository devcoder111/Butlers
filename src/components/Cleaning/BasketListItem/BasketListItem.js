import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { colors } from "../../../styles";

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  price: {
    marginLeft: 10
  },
  title: {
    fontWeight: "bold"
  },
  flex: {
    display: "flex",
    flexDirection: "row"
  },
  sign: {
    fontSize: 25
  },
  marginRight: {
    marginRight: 5
  }
});

const BasketListItem = ({
  data: { item },
  addItemToBasket,
  deleteItemFromBasket,
  roundNum
}) => {
  return (
    <View style={styles.item}>
      <View style={styles.flex}>
        <View>
          <Text style={styles.title}>{item.title || item.service_name}</Text>
        </View>
        <View style={styles.price}>
          <Text color={colors.black}>{roundNum(item.price, 2)} DKK</Text>
        </View>
      </View>
      <View style={styles.flex}>
        {item.count ? (
          <View style={styles.flex}>
            <TouchableWithoutFeedback
              onPress={() => {
                deleteItemFromBasket(item.id, item.coordinates?item.coordinates[0].index:null);
              }}
            >
              <View style={styles.signView}>
                <Text style={[styles.sign, styles.marginRight]}>-</Text>
              </View>
            </TouchableWithoutFeedback>
            {item.is_tailoring?null:(
            <>
            <View>
              <Text style={[styles.sign, styles.marginRight]}>
                {item.count}
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                addItemToBasket(item);
              }}
            >
              <View style={styles.signView}>
                <Text style={styles.sign}>+</Text>
              </View>
            </TouchableWithoutFeedback>
            </>
            )}
          </View>
          
        ) : (
          <TouchableWithoutFeedback
            onPress={() => {
              addItemToBasket(item);
            }}
          >
            <View style={styles.signView}>
              <Text style={styles.sign}>+</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};

export default BasketListItem;
