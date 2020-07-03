import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import RNGooglePlaces from 'react-native-google-places'
import { configureFonts } from 'react-native-paper'
import { actions as locationActions } from '../../../../../redux/locations'
import { actions as registrationActions } from '../../../../../redux/registration'

import NewLocations from './NewLocations'

class NewLocationsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			locationName: '',
			coordinates: {},
			address: '',
			placeName: '',
			floorNo: '',
			apartmentNo: '',
			phoneNum: '',
			postalCode: '',
		}
	}

	onConfirm = () => {
		const { actions, navigation } = this.props
		const { locationName, coordinates, address, floorNo, apartmentNo } = this.state
		const config = {
			is_default_pickup_location: 0,
			is_default_delivery_location: 0,
			name: locationName,
			latitude: coordinates.latitude,
			longitude: coordinates.longitude,
			address: `${address}`,
			floor: floorNo,
			apartments: apartmentNo,
		}
		actions.addSavedLocationRequest(config)
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
		RNGooglePlaces.openAutocompleteModal({ country: 'DK', type: 'geocode' }, [
			'location',
			'name',
			'addressComponents',
			'address',
		]).then(place => {
			console.log(place)
			console.log(place.addressComponents[place.addressComponents.length - 1])
			const indexObject = place.addressComponents[place.addressComponents.length - 1]
			if (indexObject.types.includes('postal_code')) {
				this.checkPostCode(indexObject.name)
				this.setState({
					coordinates: place.location,
					address: place.address,
					placeName: place.name,
					postalCode: indexObject.name,
				})
			}
		})
	}

	checkPostCode = code => {
		const { actions } = this.props
		const config = {
			post_code: code,
		}
		actions.checkPostCodeRequest(config)
	}

	render() {
		const { navigation, locations, checkPostCodeResponse } = this.props
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
			<NewLocations
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
				checkPostCodeResponse={checkPostCodeResponse}
			/>
		)
	}
}
const mapStateToProps = state => ({
	locations: state.locations.locations,
	checkPostCodeResponse: state.registration.checkPostCodeResponse,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...locationActions,
			...registrationActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewLocationsContainer)
