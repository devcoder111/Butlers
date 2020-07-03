import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as registrationActions } from '../../../../../redux/registration'

import AboutUsView from './AboutUsView'

class AboutUsContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: false,
			friend: false,
			tv: false,
			radio: false,
			other: false,
			otherValue: '',
		}
	}

	setModalVisible = () => {
		const { modalVisible } = this.state
		this.setState({ modalVisible: '!modalVisible' })
	}

	onSwitch = name => {
		return () =>
			this.setState(prevState => {
				return {
					[name]: !prevState[name],
				}
			})
	}

	onClear = () => {
		this.setState({ otherValue: '' })
	}

	onChange = text => {
		this.setState({ otherValue: text })
	}

	forwardTo = () => {
		const { navigation, actions } = this.props
		const { email, friend, tv, radio, otherValue: other } = this.state
		actions.addAboutUsRequest({ email, friend, tv, radio, other })
		actions.registerUserRequest()
		const routeTo = navigation.state.params.route
		navigation.navigate(routeTo)
	}

	render() {
		const { email, friend, tv, radio, other, otherValue } = this.state
		const { navigation, registeredUserLoading, registeredUser } = this.props
		const routeTo = navigation.state.params.route

		return (
			<AboutUsView
				onClear={this.onClear}
				onChange={this.onChange}
				onSwitch={this.onSwitch}
				forwardTo={this.forwardTo}
				navigation={navigation}
				routeTo={routeTo}
				email={email}
				friend={friend}
				tv={tv}
				radio={radio}
				other={other}
				otherValue={otherValue}
				setModalVisible={this.setModalVisible}
				modalVisible={registeredUserLoading}
				registeredUser={registeredUser}
			/>
		)
	}
}

const mapStateToProps = ({ registration: { registeredUserLoading, registeredUser } }) => ({
	registeredUserLoading,
	registeredUser,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...registrationActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(AboutUsContainer)
