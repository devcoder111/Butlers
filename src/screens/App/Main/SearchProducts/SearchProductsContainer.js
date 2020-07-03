import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import SearchProductsView from './SearchProductsView'

import { actions as serviceActions } from '../../../../redux/services'

import { filterServices } from '../../../../selectors/services'

class SearchProductsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
		}
	}

	componentDidMount() {
		const { actions, navigation } = this.props
		const id = navigation.getParam('id', 0)
		actions.searchServicesRequest(id)
	}

	forwardTo = id => {
		const { navigation } = this.props
		navigation.navigate('Cleaning', { id })
	}

	onClear = () => {
		const { actions } = this.props
		actions.searchItemsRequest('')
	}

	onSearch = searchText => {
		const { actions } = this.props
		actions.searchItemsRequest(searchText)
	}

	static navigationOptions = {
		header: null,
	}

	render() {
		const { navigation, services, searchText, searchServices, searchServicesLoading } = this.props
		const { value } = this.state

		return (
			<SearchProductsView
				onClear={this.onClear}
				onSearch={this.onSearch}
				searchText={searchText}
				value={value}
				forwardTo={this.forwardTo}
				navigation={navigation}
				services={services}
				searchServices={searchServices}
				searchServicesLoading={searchServicesLoading}
				activeServiceTypes={searchServices.active_service_types}
			/>
		)
	}
}

const mapStateToProps = state => ({
	services: filterServices(state),
	searchText: state.services.searchText,
	searchServices: state.services.searchServices,
	searchServicesLoading: state.services.searchServicesLoading,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...serviceActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchProductsContainer)
