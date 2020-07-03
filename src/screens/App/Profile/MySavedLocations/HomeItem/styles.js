import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,

		borderBottomWidth: 1,
		borderBottomColor: '#EEEEEE',
	},
	image: {
		width: 50,
		justifyContent: 'flex-end',
		paddingRight: 10,
		flexDirection: 'row',

		paddingVertical: 20,
	},
	nameText: {
		fontSize: 16,
		fontWeight: '300',
		color: colors.black,
		marginLeft: 15,
		marginTop: 5,

		paddingVertical: 20,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	borderTop: {
		borderTopWidth: 1,
		borderTopColor: '#EEEEEE',
	},
	nameView: {
		width: 250,
		flexDirection: 'row',
	},
	iconView: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
})
