import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import Translate from '@app/translations'

const styles = StyleSheet.create({
	titleView: {
		marginTop: 30,
	},
	subText: {
		color: '#67686C',
		fontSize: 17,
		lineHeight: 23,
		fontFamily: 'Avenir',
		fontWeight: '500',
	},
})

const HeaderText = props => {
	const { align } = props
	if (props.value != null)
		return (
			<View style={styles.titleView}>
				<Text style={[styles.subText, { textAlign: align || 'left' }]}>
					<Translate value={props.value} />
				</Text>
			</View>
		)

	return <Text />
}

export default HeaderText
