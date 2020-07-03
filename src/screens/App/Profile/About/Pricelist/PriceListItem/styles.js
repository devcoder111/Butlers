import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	rowWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 0,
		paddingBottom: 10,
	},
	itemWrap: {
		borderTopColor: '#bbb',
		borderTopWidth: 1,
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	itemTitle: {
		width: '90%',
		fontSize: 18,
		fontWeight: '500',
		color: '#1E272E',
	},
	textWrap: {
		width: '80%',
		paddingLeft: 10,
		paddingTop: 20,
	},
	priceWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 0,
		paddingVertical: 10,
	},
	price: {
		color: 'green',
	},
})
