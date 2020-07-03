import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as orderActions } from '../../../../redux/orders'
import { actions as serviceActions } from '../../../../redux/services'
import { actions as locationActions } from '../../../../redux/locations'

// import OrdersHomeView from './OrdersHomeView'
import OrdersHomeOfficeView from './OrdersHomeOfficeView'

class OrdersHomeContainer extends Component {
	getTypes = () => {
		const { actions } = this.props
		actions.getServiceTypesRequest()
	}

	getServices = id => {
		const { actions } = this.props
		actions.getServiceByTypeIdRequest(id)
	}

	getLocation = () => {
		const { actions, location } = this.props
		if (location.length > 0) return
		actions.getLocationsRequest()
	}

	componentDidMount = () => {
		const { actions } = this.props
		actions.getOrdersRequest()
		actions.getServiceTypesRequest()
	}

	render() {
		const { navigation, orders, types, services, location, isOrdersLoading } = this.props
		return (
			<OrdersHomeOfficeView
				orders={orders}
				navigation={navigation}
				types={types}
				services={services}
				getServices={this.getServices}
				getTypes={this.getTypes}
				location={location}
				getLocation={this.getLocation}
				isOrdersLoading={isOrdersLoading}
			/>
		)
	}
}

const mapStateToProps = state => ({
	orders: state.orders.orders,
	types: state.services.types,
	services: state.services.services,
	location: state.locations.locations,
	isOrdersLoading: state.orders.isOrdersLoading,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...orderActions,
			...serviceActions,
			...locationActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrdersHomeContainer)
