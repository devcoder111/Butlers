/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { View, ScrollView, Platform, Alert } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import { NavigationEvents } from 'react-navigation'
import Icon from '../../../../../assets/Icons/Icons/Address/Pin for map.svg'

import StoreList from '../StoreList/StoreList'

import mapStyle from './mapStyle'
import styles from './styles'

class StoreMap extends PureComponent {
	state = {
		region: {
			latitude: 56.240455,
			longitude: 8.262270000000001,
			latitudeDelta: 0.04,
			longitudeDelta: 0.05,
		},
	}

	onRegionChange = region => {
		this.setState({ region })
	}

	onLocationZoom = location => {
		this.setState({
			region: {
				latitude: location.latitude,
				longitude: location.longitude,
				latitudeDelta: 0.02,
				longitudeDelta: 0.02,
			},
		})
	}

	findCoordinates = () => {
		const successGetLocation = info => {
			this.setState({
				region: {
					latitude: info.coords.latitude,
					longitude: info.coords.longitude,
				},
			})
		}
		const errorGetLocation = error => {
			// console.log(error)
		}
		Geolocation.getCurrentPosition(successGetLocation, errorGetLocation)
	}

	render() {
		const { locations } = this.props
		return (
			<View>
				<NavigationEvents
					onDidFocus={() => {
						this.findCoordinates()
					}}
				/>
				<View>
					<MapView
						style={styles.map}
						region={this.state.region}
						onRegionChangeComplete={this.onRegionChange}
						customMapStyle={mapStyle}
						provider={Platform.OS === 'ios' ? null : PROVIDER_GOOGLE}
					>
						{locations.map(location => (
							<Marker
								coordinate={location.coordinates}
								title={`${location.name} ${location.address}`}
								description={location.description}
							>
								<Icon {...location} />
							</Marker>
						))}
					</MapView>
				</View>
				{this.props.withList ? (
					<ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
						<StoreList
							locations={locations}
							navigation={this.props.navigation}
							onLocationZoom={this.onLocationZoom}
						/>
						<View style={styles.filler} />
					</ScrollView>
				) : null}
			</View>
		)
	}
}

export default StoreMap
