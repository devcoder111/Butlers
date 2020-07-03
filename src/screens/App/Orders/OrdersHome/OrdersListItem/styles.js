import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	itemContainer: {
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
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
	boldText: {
		fontSize: 17,
		fontWeight: '500',
		color: '#1E272E',
	},
	text: {
		fontSize: 17,
		fontWeight: '500',
		color: colors.gray,
		marginTop: 5,
	},
	status: {
		fontWeight: '500',
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
})
