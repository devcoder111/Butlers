import React from 'react'
import { SafeAreaView, View, Text, Modal } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import Translate from '@app/translations'
import { NavigationEvents } from 'react-navigation'
import { Title } from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'

import SubscriptionsList from '../../../../../components/Profile/components/Subscriptions/SubscriptionsList'
import CustomerSubscriptionsList from './CustomerSubscriptionList/CustomerSubscriptionList'

import { colors } from '../../../../../styles'

import styles from './styles'
import ModalChoosePlan from '../../../../../components/Profile/components/Subscriptions/ModalChoosePlan'
import ModalDeleteSubscription from '../../../../../components/Profile/components/Subscriptions/ModalDeleteSubscription'

const SubscriptionsHomeView = ({
	navigation,
	navigateTo,
	data,
	modalVisible,
	setModalVisible,
	setModalPlan,
	modalPlan,
	subscriptions,
	customerSubscriptions,
	checkSwitch,
	isSubscriptionLoading,
	getAllSubscriptions,
	setDeleteVisible,
	deleteVisible,
	onDelete,
}) => {
	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<Title color={colors.black}>
					<Translate value="PROFILE_subscriptionsLink" />
				</Title>
				<NavigationEvents
					onDidFocus={() => {
						getAllSubscriptions()
					}}
				/>
				{!isSubscriptionLoading ? (
					<View>
						{customerSubscriptions ? (
							<>
								<View style={styles.subTitle}>
									<Text style={styles.subTitleText}>You can upgrade your plan anytime</Text>
								</View>
								<View style={styles.title}>
									<Text style={styles.titleText}>
										Your subscription plan{customerSubscriptions.length > 1 ? 's' : null}:
									</Text>
								</View>
								{customerSubscriptions.map((item, index) => {
									return (
										<CustomerSubscriptionsList
											item={item}
											setDeleteVisible={setDeleteVisible}
											index={index}
											subscriptions={subscriptions}
										/>
									)
								})}
								<View style={styles.title}>
									<Text style={styles.titleText}>Other subscription options:</Text>
								</View>
								<SubscriptionsList
									setModalPlan={setModalPlan}
									setModalVisible={setModalVisible}
									data={data}
									subscriptions={subscriptions}
									customerSubscriptions={customerSubscriptions}
									checkSwitch={checkSwitch}
									setDeleteVisible={setDeleteVisible}
								/>
							</>
						) : (
							<>
								<View style={styles.subTitle}>
									<Text style={styles.subTitleText}>
										<Translate value="PROFILE_subscriptionPlans_choosePlan" />
									</Text>
								</View>
								<SubscriptionsList
									setModalPlan={setModalPlan}
									setModalVisible={setModalVisible}
									data={data}
									subscriptions={subscriptions}
									customerSubscriptions={customerSubscriptions}
									checkSwitch={checkSwitch}
									setDeleteVisible={setDeleteVisible}
								/>
							</>
						)}
					</View>
				) : (
					true
				)}
				<Modal animationType="slide" transparent visible={modalVisible}>
					<ModalChoosePlan
						modalPlan={modalPlan}
						navigateTo={navigateTo}
						setModalVisible={setModalVisible}
					/>
				</Modal>
				<Modal animationType="slide" transparent visible={deleteVisible}>
					<ModalDeleteSubscription
						modalPlan={modalPlan}
						navigateTo={onDelete}
						setModalVisible={setDeleteVisible}
					/>
				</Modal>
			</SafeAreaView>
		</ScrollView>
	)
}

export default SubscriptionsHomeView
