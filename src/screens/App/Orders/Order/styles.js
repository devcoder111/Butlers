import { StyleSheet } from 'react-native'
import { colors } from '../../../../styles'

export default StyleSheet.create({
	container: {
		paddingHorizontal: 20,
	},
	boldText: {
		fontSize: 22,
		fontWeight: '700',
		marginTop: 2,
	},
	status: {
		fontWeight: '400',
		fontSize: 18,
		marginTop: 10,
	},
	text: {
		fontWeight: '400',
		fontSize: 18,
		marginTop: 5,
	},
	section: {
		fontSize: 18,
		fontWeight: '200',
		marginTop: 20,
	},
	totalAmountContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
		marginTop: 20,
		borderTopColor: '#ddd',
		borderTopWidth: 1,
	},
	totalText: {
		fontWeight: '400',
		fontSize: 18,
	},
	amountText: {
		fontSize: 18,
		fontWeight: '500',
		marginTop: 5,
	},
	amountRight: {
		position: 'relative',
	},
	messagesCount: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: '#ff0000',
		position: 'absolute',
		bottom: 3,
		right: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	messages: {
		fontSize: 14,
		fontWeight: '500',
		color: '#fff',
	},
	button: {
		width: '90%',
		marginHorizontal: '5%',
		paddingVertical: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		backgroundColor: colors.green,
		marginBottom: 20,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
	},
})
