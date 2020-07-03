import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as registrationActions } from '../../../../../redux/registration'

import NeighborhoodView from './NeighborhoodView'

class NeighborhoodContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: '',
			code: '',
		}
	}

	onChange = text => {
		this.setState({ value: text })
	}

	onClear = () => {
		this.setState({ value: '' })
	}

	forwardTo = () => {
		const { actions } = this.props
		const { value } = this.state
		const config = {
			post_code: value,
		}
		actions.addPostcodeRequest(value)
		actions.checkPostCodeRequest(config)
	}

	render() {
		const { value } = this.state
		const { authenticated, navigation, checkPostCode, actions } = this.props

		if (checkPostCode !== '') {
			if (checkPostCode === 'true') {
				navigation.navigate('DeliverNow')
				actions.clearPostCodeCheckingRequest()
			} else {
				navigation.navigate('WrongArea')
				actions.clearPostCodeCheckingRequest()
			}
		}

		return (
			<NeighborhoodView
				onClear={this.onClear}
				onChange={this.onChange}
				forwardTo={this.forwardTo}
				value={value}
				authenticated={authenticated}
				navigation={navigation}
			/>
		)
	}
}
const mapStateToProps = state => ({
	authenticated: state.auth.authenticated,
	checkPostCode: state.registration.checkPostCodeResponse,
})
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...registrationActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(NeighborhoodContainer)
