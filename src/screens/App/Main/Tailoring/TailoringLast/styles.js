import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	safeArea: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	bar: {
		paddingHorizontal: 20,
		paddingTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		padding: 20,
	},
	text: {
		fontSize: 16,
		fontWeight: '300',
		paddingHorizontal: 20,
		color: colors.gray,
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 20,
	},
	addButton: {
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	buttonText: {
		paddingLeft: 10,
		fontSize: 18,
		fontWeight: '300',
	},
})
