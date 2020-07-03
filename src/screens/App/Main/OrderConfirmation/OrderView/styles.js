import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		paddingVertical: 20,
		position: 'relative',
	},
	header: {
		fontWeight: 'bold',
		fontSize: 24,
	},
	items: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	row: {
		marginVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	price: {
		fontWeight: 'bold',
		fontSize: 18,
		color: colors.green,
	},
})
