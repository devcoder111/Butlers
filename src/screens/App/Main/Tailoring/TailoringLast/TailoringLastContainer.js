/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { getTailoringArray } from '../../../../../selectors/tailoring'

import { actions as profileActions } from '../../../../../redux/profile'
import { actions as basketActions } from '../../../../../redux/basket'
import { actions as servicesActions } from '../../../../../redux/services'

import TailoringLastView from './TailoringLastView'

class TailoringLastContainer extends Component {
	static navigationOptions = {
		header: null,
	}

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { navigation } = this.props
		return <TailoringLastView navigation={navigation} />
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
	types: state.services.types,
	services: state.services.services,
	tailoring: getTailoringArray(state),
	isServicesLoading: state.services.isServicesLoading,
	isTypesLoading: state.services.isTypesLoading,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
			...basketActions,
			...servicesActions,
		},
		dispatch,
	),
})
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TailoringLastContainer)
