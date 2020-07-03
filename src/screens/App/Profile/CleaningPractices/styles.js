import { StyleSheet } from 'react-native'

import { colors } from '../../../../styles'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingLeft: 15,
	},
	iconWrap: {
		width: 160,
		height: 160,
		backgroundColor: '#252525',
		marginTop: 35,
		marginBottom: 10,
	},
	text: {
		fontSize: 16,
		fontWeight: '400',
		marginTop: 25,
	},
	scrollWrap: {
		paddingLeft: 5,
		paddingRight: 20,
	},
	loaderWrap: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
	},
})
