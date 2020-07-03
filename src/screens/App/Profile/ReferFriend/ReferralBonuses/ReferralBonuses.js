import React from 'react'
import { Text, SafeAreaView, View, Share, FlatList } from 'react-native'

import Translate from '@app/translations'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import Title from '../../../../../components/Registration/components/Title'
import Touchable from '../../../../../components/Touchable/Touchable'
import AnimatedClock from '../../../../../components/AnimatedClock'

import { colors } from '../../../../../styles'
import styles from './styles'

const ReferralBonuses = ({ navigation, referLink, bonusesLoading, bonuses }) => {
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
					<Translate value="PROFILE_refer_bonusesLink" />
				</Title>
				{bonusesLoading ? (
					<View style={styles.loaderWrap}>
						<AnimatedClock color={colors.green} />
					</View>
				) : (
					<>
						{bonuses ? (
							<FlatList
								data={bonuses}
								renderItem={item => (
									<View style={styles.listItemWrap}>
										<View style={styles.halfscreen}>
											<Text style={styles.itemText}>{item.item.description}</Text>
										</View>
										<Text style={styles.discountText}>{item.item.discount_percent}%</Text>
									</View>
								)}
								keyExtractor={item => item.id}
							/>
						) : null}

						<View style={styles.textWrap}>
							<Text style={styles.text}>
								<Translate value="PROFILE_refer_bonusesPageText" />
							</Text>
						</View>
						<Touchable buttonStyle={styles.button} onPress={onShare}>
							<Text style={styles.buttonText}>
								<Translate value="PROFILE_refer_shareButton" />
							</Text>
						</Touchable>
					</>
				)}
			</View>
		</SafeAreaView>
	)
}

export default ReferralBonuses
