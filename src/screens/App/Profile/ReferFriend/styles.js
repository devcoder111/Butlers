import { StyleSheet } from 'react-native'

import { colors } from '../../../../styles'

export default StyleSheet.create({
	container: {
		paddingHorizontal: 20,
	},
	text: {
		fontSize: 16,
		fontWeight: '300',
		marginTop: 20,
	},
	button: {
		width: '100%',
		height: 60,
		marginVertical: 30,
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
	},
	link: {
		paddingHorizontal: 10,
		margin: 0,
		borderTopColor: '#ddd',
		borderTopWidth: 1,
	},
	linkText: {
		fontSize: 18,
		fontWeight: '300',
		paddingVertical: 30,
	},
	linkWrap: {
		borderBottomColor: '#ddd',
		borderBottomWidth: 1,
	},
})
