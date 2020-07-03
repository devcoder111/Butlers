import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import FavouriteLocationsView from './FavouriteLocationsView'

class FavouriteLocationsContainer extends Component {
	componentDidMount() {}

	render() {
		const { navigation } = this.props
		return <FavouriteLocationsView navigation={navigation} />
	}
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			// ...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteLocationsContainer)
