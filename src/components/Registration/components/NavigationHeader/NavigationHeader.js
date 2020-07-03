import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native'
import Translate from '@app/translations'

import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../../../styles'

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 20,
		backgroundColor: colors.green,
	},
	skip: {
		color: colors.white,
		fontSize: 20,
	},
	noHeader: {
		height: 65,
	},
})

const NavigationHeader = ({
	skip = false,
	noHeader = false,
	navigation = null,
	routeTo = null,
	goToMain = false,
}) =>
	noHeader ? (
		<View style={styles.noHeader} />
	) : (
		<View style={styles.header}>
			<View>
				<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
					<Icon color={colors.white} name="chevron-left" size={25} />
				</TouchableWithoutFeedback>
			</View>
			{skip ? (
				<View style={{ display: 'flex' }}>
					<TouchableWithoutFeedback onPress={goToMain ? () => navigation.navigate(routeTo) : ''}>
						<View>
							<Text style={styles.skip}><Translate value="Skip" /></Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			) : null}
		</View>
	)

export default NavigationHeader
