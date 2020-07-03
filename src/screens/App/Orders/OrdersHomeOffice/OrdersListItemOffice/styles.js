import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	itemContainer: {
		paddingVertical: 20,
		// flexDirection: 'row',
		// justifyContent: 'space-between',
		borderTopColor: '#ddd',
		borderTopWidth: 1,
	},
	leftWrap: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	rightWrap: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	spaceBetweenItems: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 5,
	},
	boldText: {
		fontSize: 17,
		fontWeight: '500',
		color: '#1E272E',
	},
	text: {
		fontSize: 17,
		fontWeight: '500',
		color: '#1E272E',
		marginTop: 5,
	},
	status: {
		fontWeight: '500',
		borderRadius: 5,
		padding: 5,
	},
	centeredText: {
		textAlign: 'center',
		color: colors.white,
	},
	itemsNumber: {
		fontWeight: '500',
		textAlign: 'center',
		padding: 5,
		color: colors.white,
		width: 26,
		height: 26,
		borderRadius: 13,
		marginRight: 5,
	},
	messages: {
		height: 30,
		width: 30,
		borderRadius: 15,
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
	},
	messagesNumber: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 16,
	},
	fixedButton: {
		display: 'flex',
		position: 'absolute',
		bottom: 50,
		right: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.green,
		opacity: 1,
		height: 30,
		width: 30,
		borderRadius: 15,
		zIndex: 1,
	},
})
