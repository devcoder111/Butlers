import React from "react";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from "./styles";

const TopTabsIcon = ({color, name}) => {
    return (
      <View style={[styles.container, {backgroundColor: color}]}>
          <Icon color='#fff' name={name} size={25}/>
      </View>
    );
}

export default TopTabsIcon;