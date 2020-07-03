import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { colors } from "../../../../../styles";

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  heart: {
    marginLeft: 10
  },
  price: {
    marginLeft: 5,
    width: 80
  },
  title: {
    fontWeight: "600",
    fontSize: 16
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
  },
  left: {
    display: "flex",
    flexDirection: "row",
    width: "65%",
    justifyContent: "space-between"
  },
  center: {
    display: "flex",
    flexDirection: "row",
    width: "30%",
    justifyContent: "flex-start"
  }
});

class CleaningServiceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.data.is_favorite ? colors.green : colors.gray
    };
  }

  changeColor = color => {
    this.setState({ color });
  };

  addFavoriteItem = () => {
    const { addFavorite, data } = this.props;
    addFavorite(data.id);
    this.changeColor(colors.green);
  };

  deleteFavoriteItem = () => {
    const { deleteFavorite, data } = this.props;
    deleteFavorite(data.id);
    this.changeColor(colors.gray);
  };

  render() {
    const { data, addItemToBasket, deleteItemFromBasket } = this.props;
    const { color } = this.state;
    const roundNum = (x, n) => {
      if (isNaN(x) || isNaN(n)) return false;
      const result = (+x).toFixed(n).replace(".", ",");
      const out = result
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
        .split(" ")
        .join(".");
      return out;
    };
    if (data.is_tailoring === 0) {
      return (
        <View style={styles.item}>
          <View style={styles.left}>
            <View style={[{ width: 140 }]}>
              <Text style={styles.title}>{data.service_name}</Text>
            </View>
            <View style={styles.center}>
              <View style={styles.heart}>
                <TouchableWithoutFeedback
                  onPress={
                    color === colors.green
                      ? this.deleteFavoriteItem
                      : this.addFavoriteItem
                  }
                >
                  <Icon color={color} name="heart" size={25} />
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.price}>
                <Text color={colors.black}>{roundNum(data.price, 2)} DKK</Text>
              </View>
            </View>
          </View>
          <View style={styles.flex}>
            {data.count ? (
              <View style={styles.flex}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    deleteItemFromBasket(data.id);
                  }}
                >
                  <View style={styles.signView}>
                    <Text style={[styles.sign, styles.marginRight]}>-</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View>
                  <Text style={[styles.sign, styles.marginRight]}>
                    {data.count}
                  </Text>
                </View>
                <TouchableWithoutFeedback
                  onPress={() => {
                    addItemToBasket(data);
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
                  addItemToBasket(data);
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
    }
    return null;
  }
}

export default CleaningServiceItem;
