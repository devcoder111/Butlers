import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as registrationActions } from '../../../../../redux/registration'

import AddressView from './AddressView'

import checkRoute from '../../../../../helpers/registration/checkRoute'

class AddressContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			address: '',
			houseNumber: '',
			floor: '',
			floorNumber: '',
			postalNumber: '',
		}
	}

	onClear = name => {
		return () => this.setState({ [name]: '' })
	}

	onChange = name => {
		return text => this.setState({ [name]: text })
	}

	forwardTo = () => {
		const { navigation, actions, registrationType } = this.props
		const { address, houseNumber, floor, floorNumber, postalNumber } = this.state
		const routeTo = checkRoute(navigation, registrationType)
		actions.addAddressRequest({ address, houseNumber, floor, floorNumber, postalNumber })
		navigation.navigate(routeTo)
	}

	render() {
		const { address, houseNumber, floor, floorNumber, postalNumber } = this.state
		const { navigation } = this.props

		return (
			<AddressView
				onClear={this.onClear}
				onChange={this.onChange}
				forwardTo={this.forwardTo}
				navigation={navigation}
				address={address}
				houseNumber={houseNumber}
				floor={floor}
				floorNumber={floorNumber}
				postalNumber={postalNumber}
			/>
		)
	}
}

const mapStateToProps = ({ registration: { registrationType } }) => ({
	registrationType,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...registrationActions,
		},
		dispatch,
	),
})
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AddressContainer)
