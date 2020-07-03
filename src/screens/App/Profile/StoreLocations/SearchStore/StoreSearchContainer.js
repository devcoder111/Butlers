import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as locationActions } from '../../../../../redux/locations'

import SearchStore from './SearchStore'

class SearchStoreContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			request: '',
		}
	}

	onChangeInput = value => {
		this.setState({ request: value })
	}

	componentDidMount = () => {
		const { actions } = this.props
		actions.getLocationsRequest()
	}

	render() {
		const { navigation, locations, user } = this.props
		const { request } = this.state
		return (
			<SearchStore
				navigation={navigation}
				locations={locations}
				onChangeInput={this.onChangeInput}
				request={request}
				user={user}
			/>
		)
	}
}
const mapStateToProps = state => ({
	locations: state.locations.locations,
	user: state.auth.user,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...locationActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchStoreContainer)
