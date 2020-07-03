import React from 'react'
import { SafeAreaView, View, ScrollView, Modal } from 'react-native'

import NavigationHeader from '../../../../components/Registration/components/NavigationHeader'
import Translate from '@app/translations'

import ConfirmationButton from '../../../../components/ConfirmationButton'

import styles from './styles'
import OrderView from './OrderView'
import AddressView from './AddressView'
import PaymentView from './PaymentView'
import TotalView from './TotalView'
import ConfirmationModal from './ConfirmationModal'
import { placeholdersHandler } from '../../../../constants/translations/index'

const OrderConfirmationView = ({
	navigation,
	basket,
	order,
	modalVisible,
	forwardTo,
	confirm,
	doneOrder,
	cards,
	getCardsLoading,
	customerLocations,
	butlersLocations,
	customerGroup,
	updateOrderLoading,
	user,
}) => {
	const mockCard = cards.find(item => item.is_default === 1)
	const roundNum = (x, n) => {
		if (isNaN(x) || isNaN(n)) return false
		const result = (+x).toFixed(n).replace('.', ',')
		const out = result
			.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
			.split(' ')
			.join('.')
		return out
	}
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<NavigationHeader
					headerName={placeholdersHandler(user, 'BASKET_orderConfirmation_header')}
					navigation={navigation}
					onAction={() => {}}
				/>
				<ScrollView style={styles.container}>
					<View>
						<OrderView roundNum={roundNum} basket={basket} order={doneOrder} />
					</View>
					<View style={{ marginTop: 15 }}>
						{updateOrderLoading ? null : (
							<AddressView
								order={order}
								navigation={navigation}
								customerLocations={customerLocations}
								butlersLocations={butlersLocations}
								doneOrder={doneOrder}
								customerGroup={customerGroup}
								updateOrderLoading={updateOrderLoading}
								user={user}
							/>
						)}
					</View>
					<View style={{ marginTop: 15 }}>
						<PaymentView navigation={navigation} cards={cards} getCardsLoading={getCardsLoading} />
					</View>
					<View style={{ marginTop: 10 }}>
						<TotalView roundNum={roundNum} doneOrder={doneOrder} />
					</View>
					<View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
						<ConfirmationButton setModalVisible={mockCard !== undefined ? confirm : null}>
						<Translate value="BASKET_orderConfirmation_confirmButton" />
						</ConfirmationButton>
					</View>
				</ScrollView>
			</SafeAreaView>
			<Modal animationType="slide" transparent visible={modalVisible}>
				<ConfirmationModal forwardTo={forwardTo} value={doneOrder} />
			</Modal>
		</>
	)
}

export default OrderConfirmationView
