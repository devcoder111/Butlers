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
	edit: {
		fontSize: 16,
	},
	items: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	row: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	price: {
		fontWeight: 'bold',
		fontSize: 18,
		color: colors.green,
	},
	addressView: {
		marginTop: 20,
	},
	label: {
		fontSize: 16,
	},
	time: {
		fontWeight: 'bold',
		fontSize: 16,
	},
})
