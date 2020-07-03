import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as locationActions } from '../../../../../redux/locations'

import StoreLocationsRegist from './StoreLocations'

class StoreLocationsContainer extends Component {
	componentDidMount = () => {
		const { actions } = this.props
		actions.getLocationsRequest()
	}

	render() {
		const { navigation, locations } = this.props
		return <StoreLocationsRegist navigation={navigation} locations={locations} />
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

export default connect(mapStateToProps, mapDispatchToProps)(StoreLocationsContainer)
