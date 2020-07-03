import React, { PureComponent } from "react";
import { FlatList, View } from "react-native";

import StoreListItem from "./StoreListItem/StoreListItem";

import styles from "./styles";

class AboutList extends PureComponent {
  render() {
    const { navigation, locations, onLocationZoom } = this.props;
    return (
      <View style={styles.wrap}>
        <FlatList
          data={locations}
          renderItem={({ item }) => (
            <StoreListItem
              onLocationZoom={onLocationZoom}
              item={item}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default AboutList;
