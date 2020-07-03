import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as locationActions } from '../../../../../redux/locations'

import NearestStores from './NearestStores'

class NearestStoresContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount = () => {
		const { actions, locations } = this.props
		if (locations) return
		actions.getLocationsRequest()
	}

	render() {
		const { navigation, locations } = this.props
		return <NearestStores navigation={navigation} locations={locations} />
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

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(NearestStoresContainer)
