import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'

import Title from '../../../../components/Registration/components/Title/Title'
import NotificationList from './NotificationList/NotificationList'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'
import AnimatedClock from '../../../../components/AnimatedClock'
import Translate from '@app/translations'

import styles from './styles'
import { colors } from '../../../../styles'

const Notifications = ({ navigation, loading, options, onChange, isNotification }) => {
	return (
		<SafeAreaView>
			<ScrollView style={styles.scrollContainer}>
				<View style={styles.container}>
					<NavigationHeader navigation={navigation} onAction={() => {}} />
					<Title color="#000"><Translate value="PROFILE_notifications_heading" /></Title>
					{loading ? (
						<View style={styles.loaderContainerWithPadding}>
							<View style={styles.spinnerWrap}>
								<AnimatedClock color={colors.green} />
							</View>
						</View>
					) : (
						<NotificationList options={options} loading={loading} onChange={onChange} />
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Notifications
