import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { actions as basketActions } from '../../../../redux/basket'
import { actions as servicesActions } from '../../../../redux/services'

import { getBasketArray, getTotalAmount } from '../../../../selectors/basket'
import { getServicesArray } from '../../../../selectors/services'

import TrousersHomeView from './TrousersHomeView'

class TrousersHomeContainer extends Component {
	static navigationOptions = {
		header: null,
	}

	constructor(props) {
		super(props)
		this.state = {}
	}

	getList = () => {
		const { actions } = this.props
		actions.getServiceByTypeIdRequest(3)
	}

	forwardTo = (link, id) => {
		const { navigation } = this.props
		navigation.navigate(link, { id })
	}

	render() {
		const {
			navigation,
			basket,
			total,
			services,
			isServicesLoading,
			isAuthenticatedLoading,
		} = this.props
		return (
			<TrousersHomeView
				forwardTo={this.forwardTo}
				navigation={navigation}
				basket={basket}
				total={total}
				services={services}
				isServicesLoading={isServicesLoading}
				getList={this.getList}
				isAuthenticatedLoading={isAuthenticatedLoading}
			/>
		)
	}
}

const mapStateToProps = state => ({
	services: getServicesArray(state),
	isServicesLoading: state.services.isServicesLoading,
	basket: getBasketArray(state),
	total: getTotalAmount(state),
	isAuthenticatedLoading: state.auth.isAuthenticatedLoading,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...basketActions,
			...servicesActions,
		},
		dispatch,
	),
})
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TrousersHomeContainer)
