import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/SimpleLineIcons'
import CloseIcon from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../../styles'

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 20,
	},
	children: {
		color: colors.black,
		fontSize: 18,
		paddingLeft: 10,
	},
	noHeader: {
		height: 65,
	},
})

const NavigationHeader = ({
	noHeader = false,
	navigation = null,
	onAction = null,
	onPress = null,
	children = '',
	color,
	leftText = false,
	icon = 'arrow-left',
}) =>
	noHeader ? (
		<View style={styles.noHeader} />
	) : (
		<View
			style={[
				styles.header,
				leftText ? { justifyContent: 'flex-start' } : { justifyContent: 'space-between' },
			]}
		>
			<View>
				<TouchableWithoutFeedback onPress={onPress || (() => navigation.goBack())}>
					{icon === 'close' ? (
						<CloseIcon color={!color ? '#1E272E' : color} name={icon} size={25} />
					) : (
						<Icon color={!color ? '#1E272E' : color} name={icon} size={25} />
					)}
				</TouchableWithoutFeedback>
			</View>
			{children ? (
				<View style={{ display: 'flex' }}>
					<TouchableWithoutFeedback onPress={onAction}>
						<View>
							<Text style={styles.children}>{children}</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			) : null}
		</View>
	)

export default NavigationHeader
