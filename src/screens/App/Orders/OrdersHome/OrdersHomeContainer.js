import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as orderActions } from '../../../../redux/orders'
import { actions as serviceActions } from '../../../../redux/services'
import { actions as locationActions } from '../../../../redux/locations'
import { actions as profileActions } from '../../../../redux/profile'

import OrdersHomeView from './OrdersHomeView'

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

	getOrdersOnFocus = () => {
		const { actions } = this.props
		actions.getOrdersRequest()
	}

	componentDidMount = () => {
		const { actions } = this.props
		actions.getOrdersRequest()
		actions.getServiceTypesRequest()
		actions.getMessagesRequest()
	}

	addOrderId = id => {
		const { actions } = this.props
		actions.orderIdRequest(id)
	}

	onNotifyStore = id => {
		const { actions } = this.props
		actions.notifyStoreRequest(id)
	}

	render() {
		const {
			navigation,
			orders,
			types,
			services,
			location,
			isOrdersLoading,
			user,
			customerGroup,
		} = this.props
		return (
			<OrdersHomeView
				orders={orders}
				navigation={navigation}
				types={types}
				services={services}
				getServices={this.getServices}
				getTypes={this.getTypes}
				location={location}
				getLocation={this.getLocation}
				isOrdersLoading={isOrdersLoading}
				addOrderId={this.addOrderId}
				user={user}
				onNotifyStore={this.onNotifyStore}
				getOrdersOnFocus={this.getOrdersOnFocus}
				customerGroup={customerGroup}
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
	user: state.auth.user,
	customerGroup: state.profile.getCustomerGroupResponse,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...orderActions,
			...serviceActions,
			...locationActions,
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrdersHomeContainer)
