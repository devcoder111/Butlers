/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { actions as profileActions } from '../../../../redux/profile'
import { actions as serviceActions } from '../../../../redux/services'

import About from './About'

class AboutContainer extends Component {
	static navigationOptions = {
		header: null,
	}

	componentDidMount = () => {
		const { actions } = this.props
		actions.getAppSettingsRequest()
		actions.getServiceTypesRequest()
		actions.getServiceTypesWithRequest()
	}

	render() {
		const { navigation, serviceTypesWith } = this.props
		return <About navigation={navigation} serviceTypesWith={serviceTypesWith} />
	}
}

const mapStateToProps = state => ({
	serviceTypesWith: state.services.serviceTypesWith,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
			...serviceActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)
