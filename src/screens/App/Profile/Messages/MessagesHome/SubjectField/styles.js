import { StyleSheet } from 'react-native'

import { colors } from '../../../../../../styles'

export default StyleSheet.create({
	containerMessages: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		paddingVertical: 20,
		paddingHorizontal: 20,

		borderBottomWidth: 1,
		borderBottomColor: '#EEEEEE',
	},
	image: {
		width: 30,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	nameText: {
		fontSize: 16,
		fontWeight: '300',
		color: colors.black,
	},
	borderTop: {
		borderTopWidth: 1,
		borderTopColor: '#EEEEEE',
	},
	itemsNumber: {
		fontWeight: '500',
		alignItems: 'center',
		padding: 5,
		width: 26,
		height: 26,
		borderRadius: 13,
		marginRight: 5,
		justifyContent: 'center',
	},
	nameView: {
		width: 250,
	},
})
