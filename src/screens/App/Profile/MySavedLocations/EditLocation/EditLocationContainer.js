import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import RNGooglePlaces from 'react-native-google-places'
import { actions as locationActions } from '../../../../../redux/locations'

import EditLocation from './EditLocation'

class EditLocationContainer extends Component {
	constructor(props) {
		super(props)
		const { navigation } = this.props
		this.state = {
			locationName: navigation.state.params.name,
			coordinates: {
				latitude: navigation.state.params.latitude,
				longitude: navigation.state.params.longitude,
			},
			address: navigation.state.params.address,
			placeName: '',
			floorNo: navigation.state.params.floor,
			apartmentNo: navigation.state.params.apartments,
			phoneNum: '',
		}
	}

	onConfirm = () => {
		const { actions, navigation } = this.props
		const { locationName, coordinates, address, floorNo, apartmentNo } = this.state
		const config = {
			id: navigation.state.params.id,
			is_default_pickup_location: 0,
			is_default_delivery_location: 0,
			name: locationName,
			latitude: coordinates.latitude,
			longitude: coordinates.longitude,
			address: `${address}`,
			floor: floorNo,
			apartments: apartmentNo,
		}
		actions.updateSavedLocationRequest(config)
		actions.cleanSavedLocationRequest()
		setTimeout(() => {
			actions.getSavedLocationRequest()
		}, 1000)
		navigation.navigate('MySavedLocations')
	}

	onClear = name => {
		return () => this.setState({ [name]: '' })
	}

	onChange = name => {
		return text => this.setState({ [name]: text })
	}

	openSearchModal = () => {
		RNGooglePlaces.openAutocompleteModal().then(place => {
			this.setState({
				coordinates: place.location,
				address: place.address,
				placeName: place.name,
			})
		})
	}

	render() {
		const { navigation, locations } = this.props
		const {
			locationName,
			address,
			floorNo,
			apartmentNo,
			phoneNum,
			placeName,
			coordinates,
		} = this.state
		return (
			<EditLocation
				navigation={navigation}
				locations={locations}
				onClear={this.onClear}
				onChange={this.onChange}
				locationName={locationName}
				address={address}
				floorNo={floorNo}
				apartmentNo={apartmentNo}
				phoneNum={phoneNum}
				openSearchModal={this.openSearchModal}
				coordinates={coordinates}
				placeName={placeName}
				onConfirm={this.onConfirm}
			/>
		)
	}
}
const mapStateToProps = state => ({
	locations: state.locations.locations,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...locationActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditLocationContainer)
