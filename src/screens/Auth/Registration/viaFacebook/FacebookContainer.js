import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as registrationActions } from '../../../../redux/registration'

import FacebookView from './FacebookView'

class FacebookContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: '',
			isPickerVisible: false,
			country: '',
			code: '',
			email: '',
			switchEmail: false,
		}
	}

	onClear = name => {
		return () => this.setState({ [name]: '' })
	}

	onChange = name => {
		return text => this.setState({ [name]: text })
	}

	onSwitch = () => {
		const { switchEmail } = this.state
		this.setState({ switchEmail: !switchEmail })
	}

	togglePicker = () => {
		const { isPickerVisible } = this.state
		this.setState({ isPickerVisible: !isPickerVisible })
	}

	changeCountry = inputValue => {
		const values = inputValue.split('|')
		this.setState({ country: values[0], code: values[1] })
	}

	forwardTo = () => {
		const { navigation, actions } = this.props
		const { code, value, email } = this.state
		const routeTo = navigation.state.params.route
		actions.addPhoneRequest(`+${code}${value}`)
		actions.addEmailRequest(email)
		navigation.navigate(routeTo)
	}

	render() {
		const { value, isPickerVisible, country, code, email, switchEmail } = this.state
		const { navigation } = this.props
		return (
			<FacebookView
				onClear={this.onClear}
				onChange={this.onChange}
				navigation={navigation}
				togglePicker={this.togglePicker}
				country={country}
				code={code}
				value={value}
				email={email}
				switchEmail={switchEmail}
				onSwitch={this.onSwitch}
				isPickerVisible={isPickerVisible}
				changeCountry={this.changeCountry}
				forwardTo={this.forwardTo}
			/>
		)
	}
}

const mapStateToProps = ({ registration: { phone } }) => ({
	phone,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...registrationActions,
		},
		dispatch,
	),
})
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FacebookContainer)
