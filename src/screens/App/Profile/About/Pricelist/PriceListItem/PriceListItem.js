import React, { PureComponent } from "react";
import { View, Text, FlatList, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { colors } from "../../../../../../styles";

import styles from "./styles";

class PriceListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    const { title, services } = this.props;
    const { isActive } = this.state;
    const roundNum = (x, n) => {
      if (isNaN(x) || isNaN(n)) return false;
      const result = (+x).toFixed(n).replace(".", ",");
      const out = result
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
        .split(" ")
        .join(".");
      return out;
    };
    console.log(roundNum(1231332.0, 2), "test");
    return (
      <TouchableWithoutFeedback
        onPress={() => this.setState({ isActive: !isActive })}
      >
        <View style={styles.itemWrap}>
          <View style={styles.rowWrap}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Icon
              color={colors.gray}
              name={isActive ? "arrow-down" : "arrow-right"}
              size={25}
            />
          </View>
          {isActive ? (
            <FlatList
              style={styles.listWrap}
              data={services}
              renderItem={({ item }) => (
                <View style={styles.priceWrap}>
                  <Text style={styles.priceTitle}>{item.service_name}</Text>
                  <Text style={styles.price}>
                    {roundNum(item.price, 2)} DKK
                  </Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default PriceListItem;
