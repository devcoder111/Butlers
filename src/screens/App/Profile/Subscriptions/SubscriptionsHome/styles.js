import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		position: 'relative',
	},
	subTitle: {
		marginTop: 20,
		marginBottom: 10,
	},
	titleText: {
		fontSize: 18,
		fontWeight: '600',
	},
	title: {
		marginTop: 30,
		marginBottom: 10,
	},
})
