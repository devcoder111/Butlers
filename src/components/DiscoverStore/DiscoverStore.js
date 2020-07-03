import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	donot: {
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#67686c',
		fontFamily: 'Avenir',
		fontSize: 14,
		lineHeight: 19,
	},
	createhere: {
		flexDirection: 'row',
		justifyContent: 'center',
		color: '#67686c',
		fontFamily: 'Avenir',
		fontWeight: '500',
		fontSize: 19,
		lineHeight: 28,
	},
	signupLink: {
		color: '#2ED573',
	},
})

const DiscoverStore = () => {
	return (
		<View>
			<Text style={styles.donot}>Discover the nearest store</Text>

			<View style={styles.createhere}>
				<Text style={styles.signupLink} onPress={() => forwardTo('Neighborhood', 'viaPhone')}>
					Continue
				</Text>
				<Text style={{ color: '#67686c' }}> with registration</Text>
			</View>
		</View>
	)
}

export default DiscoverStore
