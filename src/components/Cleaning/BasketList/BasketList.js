import React, { Component } from "react";
import { View, FlatList } from "react-native";

import BasketListItem from "../BasketListItem";

class BasketList extends Component {
  render() {
    const { basket, addItem, deleteItem, roundNum } = this.props;

    return (
      <View>
        <FlatList
          data={basket}
          renderItem={item => (
            <BasketListItem
              addItemToBasket={addItem}
              deleteItemFromBasket={deleteItem}
              data={item}
              roundNum={roundNum}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default BasketList;
