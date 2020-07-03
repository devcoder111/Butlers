import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { colors } from "../../../../../../styles";

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray
  },
  price: {
    marginLeft: 10
  },
  title: {
    fontWeight: "400",
    fontSize: 18
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },
  sign: {
    fontSize: 30,
    fontWeight: "200"
  },
  signView: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  marginRight: {
    marginRight: 5
  },
  counter: {
    fontWeight: "400",
    fontSize: 18
  }
});

const TailoringListItem = ({
  data: { item },
  addItem,
  deleteItem,
  tailoring,
  setSelectedCategoryErrorHidden
}) => {
  const getCount = () => {
    const service = tailoring.find(element => element.id === item.id);
    return typeof service === "undefined" ? 0 : service.count;
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
  return (
    <View style={styles.item}>
      <View style={styles.flex}>
        <View>
          <Text style={styles.title}>{item.service_name}</Text>
        </View>
      </View>
      <View style={styles.flex}>
        <View style={styles.price}>
          <Text color={colors.black} style={styles.title}>
            {roundNum(item.price, 2)} DKK
          </Text>
        </View>
        {getCount() ? (
          <View style={styles.flex}>
            <TouchableWithoutFeedback
              onPress={() => {
                if (tailoring.length === 1 && tailoring[0].count === 1)
                  setSelectedCategoryErrorHidden();
                deleteItem(item.id);
              }}
            >
              <View style={styles.signView}>
                <Text style={[styles.sign, styles.marginRight]}>-</Text>
              </View>
            </TouchableWithoutFeedback>
            <View>
              <Text style={[styles.counter, styles.marginRight]}>
                {getCount()}
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                addItem(item);
              }}
            >
              <View style={styles.signView}>
                <Text style={styles.sign}>+</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ) : (
          <TouchableWithoutFeedback
            onPress={() => {
              addItem(item);
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

export default TailoringListItem;
