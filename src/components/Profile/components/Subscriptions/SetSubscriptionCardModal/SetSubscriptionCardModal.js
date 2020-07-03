import React from 'react'
import { Text, View } from 'react-native'

import Translate from '@app/translations'
import styles from './styles'

import SignInButton from '../../../../SignInButton/SignInButton'
import { colors } from '../../../../../styles'

const SetSubscriptionCardModal = ({ forwardTo }) => {
	return (
		<View style={styles.container}>
			<View style={styles.modalWrap}>
				<Text style={styles.header}>
					<Translate value="PROFILE_selectCardToPay_successHeading" />
				</Text>
				<Text style={styles.text}>
					<Translate value="PROFILE_selectCardToPay_successText" />
				</Text>
				<View style={{ paddingHorizontal: 20 }}>
					<SignInButton onPress={() => forwardTo('SubscriptionsHome')}>
						<Translate value="PROFILE_selectCardToPay_successButton" />
					</SignInButton>
				</View>
			</View>
		</View>
	)
}

export default SetSubscriptionCardModal
