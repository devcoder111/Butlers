/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as profileActions } from '../../../../redux/auth'
import PersonalInformationView from './PersonalInformationView'

class PersonalInformationContainer extends Component {
	constructor(props) {
		super(props)

		const { user } = this.props
		this.state = {
			firstName: user.first_name,
			lastName: user.last_name,
			date: user.birth_date || new Date(),
			sex: user.sex,
			email: user.email,
			phone: user.phone,
			address: '',
			houseNumber: '',
			floor: '',
			floorNumber: '',
			postalNumber: '',
			language: user.locale,
		}
	}

	updateUser = () => {
		const { actions, user } = this.props
		const form = this.state
		const config = {}
		if (user.first_name !== form.firstName) config.first_name = form.firstName
		if (user.last_name !== form.lastName) config.last_name = form.lastName
		if (user.birth_date !== form.date) config.birth_date = form.date
		if (user.sex !== form.sex) config.sex = form.sex
		if (user.email !== form.email) config.email = form.email
		if (user.phone !== form.phone) config.phone = form.phone
		if (user.locale !== form.language) config.locale = form.language
		actions.updateCustomerDataRequest(config)
	}

	onUpdateComplete = () => {
		const { actions, navigation } = this.props
		actions.checkInformationUpdatedFlagRequest()
		navigation.goBack()
	}

	onClear = name => {
		return () => this.setState({ [name]: '' })
	}

	onChange = name => {
		return text => this.setState({ [name]: text })
	}

	onModalChange = value => {
		return text => this.setState({ [value]: text.label })
	}

	onSave = () => {}

	render() {
		const { navigation, user, updateCustomerDataSuccess, updateCustomerDataLoading } = this.props
		const {
			firstName,
			lastName,
			date,
			sex,
			email,
			phone,
			address,
			houseNumber,
			floor,
			floorNumber,
			postalNumber,
			language,
		} = this.state
		return (
			<PersonalInformationView
				navigation={navigation}
				onChange={this.onChange}
				onModalChange={this.onModalChange}
				onClear={this.onClear}
				firstName={firstName}
				lastName={lastName}
				date={date}
				sex={sex}
				email={email}
				phone={phone}
				address={address}
				houseNumber={houseNumber}
				floor={floor}
				floorNumber={floorNumber}
				postalNumber={postalNumber}
				language={language}
				user={user}
				updateUser={this.updateUser}
				updateCustomerDataSuccess={updateCustomerDataSuccess}
				updateCustomerDataLoading={updateCustomerDataLoading}
				onUpdateComplete={this.onUpdateComplete}
			/>
		)
	}
}
const mapStateToProps = state => ({
	user: state.auth.user,
	updateCustomerDataSuccess: state.auth.updateCustomerDataSuccess,
	updateCustomerDataLoading: state.auth.updateCustomerDataLoading,
})
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformationContainer)
