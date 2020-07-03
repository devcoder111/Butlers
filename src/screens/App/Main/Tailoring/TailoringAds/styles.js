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
	yesButton: {
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.green,
		paddingVertical: 10,
	},
	noButton: {
		marginHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ddd',
		paddingVertical: 10,
	},
	yesText: {
		fontSize: 18,
		fontWeight: '400',
		color: '#fff',
	},
	noText: {
		fontSize: 18,
		fontWeight: '400',
		color: '#111',
	},
})
