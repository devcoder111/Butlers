import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		minHeight: 120,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
		paddingBottom: 20,
	},
	itemContainer: {
		backgroundColor: colors.white,
		// minHeight: 120,
		width: 75,
		alignContent: 'center',
		alignItems: 'center',
		marginRight: 5,
	},
	icon: {
		height: 52,
		width: 52,
		borderRadius: 26,
		overflow: 'hidden',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 13,
		marginTop: 10,
		textAlign: 'center',
		fontWeight: '500',
	},
	iconContainer: {
		height: 56,
		width: 56,
		borderRadius: 28,
		borderWidth: 2,
		borderColor: '#fff',
		marginTop: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	active: {
		backgroundColor: colors.green,
	},
	inactive: {
		backgroundColor: colors.gray,
	},
})
