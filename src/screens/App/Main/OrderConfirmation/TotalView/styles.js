import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		paddingVertical: 20,
		position: 'relative',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	label: {
		fontSize: 15,
	},
	total: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	price: {
		color: colors.green,
		fontSize: 24,
		fontWeight: 'bold',
	},
	column: {},
})
