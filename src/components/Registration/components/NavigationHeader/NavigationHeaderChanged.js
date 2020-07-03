import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'

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
	back: {
		marginLeft: 20,
		color: colors.white,
	},
	textColor: {
		color: colors.white,
		fontSize: 20,
	},
	skip: {
		color: colors.white,
		fontSize: 40,
		marginRight: 20,
	},
	noHeader: {
		height: 65,
	},
})

const NavigationHeader = ({
	skip = true,
	noHeader = false,
	navigation = null,
	routeTo = 'Main',
	goToMain = true,
	headerName,
}) =>
	noHeader ? (
		<View style={styles.noHeader} />
	) : (
		<View style={styles.header}>
			<View>
				<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
					<SimpleLineIcons style={styles.back} name="arrow-left" size={25} />
				</TouchableWithoutFeedback>
			</View>
			{skip && headerName ? (
				<View style={{ display: 'flex' }}>
					<Text style={styles.textColor}>{headerName}</Text>
				</View>
			) : null}
			{skip && headerName ? (
				<View style={{ display: 'flex' }}>
					<TouchableWithoutFeedback onPress={goToMain ? () => navigation.navigate(routeTo) : ''}>
						<View>
							<EvilIcon style={styles.skip} name="close" size={40} />
						</View>
					</TouchableWithoutFeedback>
				</View>
			) : null}
		</View>
	)

export default NavigationHeader
