import { StyleSheet } from 'react-native'

import { colors } from '../../../../../../styles'

export default StyleSheet.create({
	leftWrap: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingVertical: 10,
	},
	rightWrap: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		paddingVertical: 10,
	},
	message: {
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		backgroundColor: '#fafafa',
		padding: 15,
		marginTop: 10,
	},
	clientMessage: {
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		backgroundColor: '#fafafa',
		padding: 15,
		marginTop: 10,
	},
	fromStart: {
		alignSelf: 'flex-start',
	},
	rowString: {
		flexDirection: 'row',
		display: 'flex',
	},
	clientAvatar: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: colors.black,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
