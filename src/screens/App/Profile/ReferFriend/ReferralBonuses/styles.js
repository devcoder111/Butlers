import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	container: {
		paddingHorizontal: 20,
	},
	text: {
		fontSize: 16,
		fontWeight: '300',
		marginTop: 20,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: '600',
		paddingVertical: 20,
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
	textWrap: {
		borderTopColor: '#ddd',
		borderTopWidth: 1,
	},
	loaderWrap: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	listItemWrap: {
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
	},
	halfscreen: {
		width: '70%',
	},
	itemText: {
		fontSize: 18,
		fontWeight: '300',
	},
	discountText: {
		fontSize: 18,
		fontWeight: '400',
		color: colors.green,
	},
})
