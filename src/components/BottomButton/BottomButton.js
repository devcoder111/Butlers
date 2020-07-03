import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../styles'
import * as Animatable from 'react-native-animatable';
import { BoxShadow } from 'react-native-shadow'

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 55,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 15,
		borderWidth: 1,
		borderRadius: 35,
		marginBottom: 30,
	},
})

const shadowOpt = {
	width: 295,
	height: 70,
	color: "#46e296",
	border: 10,
	radius: 35,
	opacity: 0.1,
	x: 0,
	y: 0.18,
	style: { marginVertical: 25 }
}

const disableOpt = {
	width: 295,
	height: 70,
	color: "#fff",
	border: 10,
	radius: 35,
	opacity: 0.1,
	x: 0,
	y: 0.18,
	style: { marginVertical: 25 }
}

const BottomButton = props => {
	const { children, onPress, background, border, arrow, shadow } = props
	return (

		<TouchableOpacity onPress={onPress} style={{ position: 'relative' }}>
			<BoxShadow setting={shadow ? shadowOpt : disableOpt}>
				<View style={[styles.container, { backgroundColor: background || '#D8D8D8' }, { borderColor: border || '#D8D8D8' }]}>
					<Text style={{ color: colors.white, fontSize: 14, lineHeight: 28, fontFamily: 'CircularStd-Bold' }}>{children}</Text>
					{arrow == 'true' &&
						<Animatable.View animation="pulse" easing="ease-out" duration={500} iterationCount="infinite" direction="alternate">
							<View style={{ position: 'relative', right: -70 }}>
								<Icon name="arrowright" size={20} color="#fff" />
							</View>
						</Animatable.View>
					}
				</View>
			</BoxShadow>
		</TouchableOpacity>

	)
}

export default BottomButton
