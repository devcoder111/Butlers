import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as locationActions } from '../../../../../../redux/locations'

import SearchStoreRegist from './SearchStore'

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
		const { navigation, locations } = this.props
		const { request } = this.state
		return (
			<SearchStoreRegist
				navigation={navigation}
				locations={locations}
				onChangeInput={this.onChangeInput}
				request={request}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchStoreContainer)
