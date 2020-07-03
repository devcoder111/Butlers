import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddPaymentMethodView from './AddPaymentMethodView'

const methods = [
	{
		brand: 'visa',
		number: '',
		navigateTo: 'AddCard',
	},
	{
		brand: 'mastercard',
		number: '',
		navigateTo: 'AddCard',
	},
]

class AddPaymentMethodContainer extends Component {
	render() {
		const { navigation } = this.props

		return <AddPaymentMethodView navigation={navigation} data={methods} />
	}
}

const mapStateToProps = ({ profile: { card } }) => ({
	card,
})

export default connect(mapStateToProps, null)(AddPaymentMethodContainer)
