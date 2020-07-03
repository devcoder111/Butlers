/* eslint-disable camelcase */
import React from 'react'
import { SafeAreaView, View, Text, Modal } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import { Title } from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'

import SubscriptionsPaymentMethodsList from '../../../../../components/Profile/components/Subscriptions/SubscriptionsPaymentMethodsList'

import { colors } from '../../../../../styles'

import styles from './styles'

import AddNew from '../../../../../components/Profile/components/AddNew'

import SetSubscriptionCardModal from '../../../../../components/Profile/components/Subscriptions/SetSubscriptionCardModal/SetSubscriptionCardModal'

const SubscriptionsPaymentMethodsView = ({
	navigation,
	data,
	modalPlan: { subscription_name },
	forwardTo,
	modalVisible,
	toggleModalVisible,
	setCardForSubscription,
}) => {
	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<Title color={colors.black}>Payment Methods</Title>
				<View style={styles.subTitle}>
					<Text style={styles.subTitleText}>
						{data ? 'Choose the method to pay' : 'Add a payment method to subscribe'}{' '}
						{'to the next plan: '}
						<Text style={styles.paymentType}>{subscription_name}</Text>
					</Text>
				</View>
				{/* {console.log(data)} */}
				<SubscriptionsPaymentMethodsList
					data={data}
					navigation={navigation}
					toggleModalVisible={toggleModalVisible}
					setCardForSubscription={setCardForSubscription}
				/>
				<AddNew
					navigateTo="AddPaymentMethod"
					navigation={navigation}
					title="Add new payment method"
					icon="plus"
				/>
			</SafeAreaView>
			<Modal animationType="slide" transparent visible={modalVisible}>
				<SetSubscriptionCardModal
					// onClose={onModalClose}
					navigation={navigation}
					// onAddCard={onAddCard}
					// visible={visibleModal}
					forwardTo={forwardTo}
				/>
			</Modal>
		</ScrollView>
	)
}

export default SubscriptionsPaymentMethodsView
