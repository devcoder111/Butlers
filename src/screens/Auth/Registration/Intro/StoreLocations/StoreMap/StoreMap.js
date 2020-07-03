/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, ScrollView, Platform } from "react-native";
import Icon from "../../../../../../assets/Icons/Icons/Address/Pin for map.svg";

import StoreList from "../StoreList/StoreList";

import mapStyle from "./mapStyle";
import styles from "./styles";

class StoreMap extends PureComponent {
  state = {
    region: {
      latitude: 56.240455,
      longitude: 8.262270000000001,
      latitudeDelta: 1.1,
      longitudeDelta: 2.2
    }
  };

  onRegionChange = region => {
    this.setState({ region });
  };

  onLocationZoom = location => {
    this.setState({
      region: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      }
    });
  };

  render() {
    const { locations } = this.props;
    return (
      <View>
        <View>
          <MapView
            style={styles.map}
            region={this.state.region}
            onRegionChangeComplete={this.onRegionChange}
            customMapStyle={mapStyle}
            provider={Platform.OS === "ios" ? null : PROVIDER_GOOGLE}
          >
            {locations.map(location => (
              <Marker
                coordinate={location.coordinates}
                title={location.name}
                description={location.address}
              >
                <Icon {...location} />
              </Marker>
            ))}
          </MapView>
        </View>
        {this.props.withList ? (
          <ScrollView
            style={styles.listContainer}
            showsVerticalScrollIndicator={false}
          >
            <StoreList
              onLocationZoom={this.onLocationZoom}
              locations={locations}
              navigation={this.props.navigation}
            />
          </ScrollView>
        ) : null}
      </View>
    );
  }
}

export default StoreMap;
