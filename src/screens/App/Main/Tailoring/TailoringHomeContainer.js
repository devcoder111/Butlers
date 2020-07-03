/* eslint-disable no-param-reassign */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as tailoringActions } from '../../../../redux/tailoring'
import { actions as servicesActions } from '../../../../redux/services'

import TailoringHome from './TailoringHome'

class TailoringHomeContainer extends Component {
	componentDidMount = () => {
		const { actions } = this.props
		actions.getServiceTypesRequest()
	}

	render() {
		const { navigation } = this.props
		return <TailoringHome navigation={navigation} />
	}
}

const mapStateToProps = state => ({
	types: state.services.types,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...tailoringActions,
			...servicesActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(TailoringHomeContainer)
