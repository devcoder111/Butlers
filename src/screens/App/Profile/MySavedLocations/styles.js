import { StyleSheet } from 'react-native'

import { colors } from '../../../../styles'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingHorizontal: 20,
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
	subtitle: {
		marginVertical: 20,
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
		alignItems: 'center',
	},
	b2bWrap: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,

		borderBottomWidth: 1,
		borderBottomColor: '#EEEEEE',
	},
})
