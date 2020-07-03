import React from 'react'
import { Text, SafeAreaView, View, Share } from 'react-native'

import Translate from '@app/translations'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'
import Title from '../../../../components/Registration/components/Title'
import Touchable from '../../../../components/Touchable/Touchable'

import styles from './styles'

const ReferFriend = ({ navigation, referLink }) => {
	const onShare = async () => {
		try {
			const result = await Share.share({
				message: await referLink,
			})

			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			// error
		}
	}
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<Title>
					<Translate value="PROFILE_referLink" />
				</Title>
				<Text style={styles.text}>
					<Translate value="PROFILE_refer_firstText" />
					{'\n'}
					<Translate value="PROFILE_refer_secondText" />
				</Text>
				<Touchable buttonStyle={styles.button} onPress={onShare}>
					<Text style={styles.buttonText}>
						<Translate value="PROFILE_refer_shareButton" />
					</Text>
				</Touchable>
				<View style={styles.linkWrap}>
					<Touchable
						containerStyle={styles.link}
						onPress={() => navigation.navigate('ReferralBonuses')}
					>
						<Text style={styles.linkText}>
							<Translate value="PROFILE_refer_bonusesLink" />
						</Text>
					</Touchable>
					<Touchable
						containerStyle={styles.link}
						onPress={() => navigation.navigate('TermsOfReferrals')}
					>
						<Text style={styles.linkText}>
							<Translate value="PROFILE_refer_termsLink" />
						</Text>
					</Touchable>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default ReferFriend
