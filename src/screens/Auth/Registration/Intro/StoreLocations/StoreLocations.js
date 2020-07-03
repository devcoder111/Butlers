import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import HeaderText from '../../../../../components/HeaderText/HeaderText';
import SubDescription from '../../../../../components/SubDescription/SubDescription';
import StoreMap from "./StoreMap/StoreMap";
import NavigationHeader from "../../../../../components/Profile/components/NavigationHeader";
import styles from "./styles";

const StoreLocationsRegist = ({ navigation, locations }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <NavigationHeader navigation={navigation}></NavigationHeader>
        <HeaderText value="INTRO_wrongArea_Heading" />
        <SubDescription value="INTRO_wrongArea_MapLabel" />
      </View>
      <View style={styles.scrollContainer}>
        <StoreMap navigation={navigation} withList locations={locations} />
      </View>
    </SafeAreaView>
  );
};

export default StoreLocationsRegist;
