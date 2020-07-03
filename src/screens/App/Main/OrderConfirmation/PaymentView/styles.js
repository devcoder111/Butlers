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

	row: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	addressView: {
		marginTop: 20,
	},
	label: {
		fontSize: 16,
	},
})
