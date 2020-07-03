import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import Icon from "react-native-vector-icons/Entypo";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import { colors } from "../../../../../styles";
import styles from "./styles";

const FavoritesListItem = ({
  item,
  addItemToBasket,
  deleteItemFromBasket,
  deleteFavorite,
  filtered
}) => {
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
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{item}</Text>
      </View>
      {filtered.map(el => {
        return (
          <View style={styles.rowContainer}>
            <View style={styles.left}>
              <View>
                <Text style={styles.text}>{el.service_name}</Text>
              </View>
              <View style={styles.center}>
                <View style={styles.heart}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      deleteFavorite(el.id);
                    }}
                  >
                    <Icon name="heart" size={25} color={colors.green} />
                  </TouchableWithoutFeedback>
                </View>
                <View style={styles.price}>
                  <Text style={styles.priceText}>
                    {roundNum(el.price, 2)} DKK
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flex}>
              {el.count ? (
                <View style={styles.flex}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      deleteItemFromBasket(el.id);
                    }}
                  >
                    <View style={styles.signView}>
                      <Icon name="minus" size={20} color="#1E272E" />
                    </View>
                  </TouchableWithoutFeedback>
                  <View>
                    <Text style={[styles.sign, styles.marginRight]}>
                      {el.count}
                    </Text>
                  </View>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      addItemToBasket(el);
                    }}
                  >
                    <View containerStyle={styles.addContainer}>
                      <Icon name="plus" size={20} color="#1E272E" />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              ) : (
                <TouchableWithoutFeedback
                  onPress={() => {
                    addItemToBasket(el);
                  }}
                >
                  <View containerStyle={styles.sign}>
                    <EvilIcon name="plus" size={40} color="#1E272E" />
                  </View>
                </TouchableWithoutFeedback>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default FavoritesListItem;
