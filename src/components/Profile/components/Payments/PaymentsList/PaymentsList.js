import React from 'react'
import { SectionList, FlatList, View } from 'react-native'
import Translate from '@app/translations'

import PaymentsListItemContainer from '../PaymentsListItem/PaymentsListItemContainer'
import PaymentsListHeader from '../PaymentsListHeader'

const PaymentsList = ({ navigation, data }) => {
	const primaryPayment = data.find(item => {
		return item.is_default === 1
	})
	const primary = primaryPayment || {}

	const additPayment = data.filter(el => {
		return el.is_default === 0
	})
	const dataNew = [
		{ title: <Translate value="PROFILE_paymentMethods_primary" />, data: [primary] },
		{ title: <Translate value="PROFILE_paymentMethods_additional" />, data: additPayment },
	]
	return (
		<SectionList
			sections={dataNew}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item }) => <PaymentsListItemContainer data={item} navigation={navigation} />}
			renderSectionHeader={({ section: { title } }) => <PaymentsListHeader title={title} />}
		/>
	)
}

export default PaymentsList
