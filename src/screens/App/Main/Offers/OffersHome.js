import React, { Component } from 'react'

import { View, Modal } from 'react-native'

import Basket from '../../../../components/Cleaning/BasketButton'
import ServicesList from '../../../../components/ServicesList'
import EmailVerificationModal from '../../../../components/EmailVerificationModal/EmailVerificationModalView'
import EmailVerificatedModal from '../../../../components/EmailVerificationModal/EmailVerificatedModal/EmailVerificatedModal'

const data = [
	{
		id: 0,
		title: 'Hello',
		price: 20,
		discount: '20%',
		favourite: false,
	},
	{
		id: 1,
		title: 'Me',
		price: 30,
		discount: '20%',
		favourite: false,
	},
	{
		id: 2,
		title: 'Hello',
		price: 20,
		discount: '20%',
		favourite: true,
	},
	{
		id: 3,
		title: 'Hello',
		price: 20,
		discount: '20%',
		favourite: true,
	},
	{
		id: 4,
		title: 'Hello',
		price: 20,
		discount: '20%',
		favourite: true,
	},
	{
		id: 5,
		title: 'Hello',
		price: 20,
		discount: '20%',
		favourite: false,
	},
]

class OffersHome extends Component {
	navigateTo = link => {
		const { navigation } = this.props
		navigation.navigate(link)
	}

	render() {
		const { user, visibleModal, onClose } = this.props
		return (
			<View style={{ flex: 1, position: 'relative' }}>
				<ServicesList navigateTo={() => this.navigateTo('Cleaning')} data={data} />
				<Basket navigateTo={() => this.navigateTo('Basket')} />
				{user.email_verified_at ? (
					<Modal animationType="slide" transparent visible={visibleModal}>
						<EmailVerificatedModal onClose={onClose} />
					</Modal>
				) : (
					<Modal animationType="slide" transparent visible={visibleModal}>
						<EmailVerificationModal onClose={onClose} />
					</Modal>
				)}
			</View>
		)
	}
}

export default OffersHome
