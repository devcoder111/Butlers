import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	rowWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 0,
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
		fontWeight: '400',
		color: '#1E272E',
	},
	itemText: {
		fontSize: 16,
		fontWeight: '400',
		color: '#555',
	},
	textWrap: {
		width: '80%',
		paddingLeft: 10,
		paddingTop: 20,
	},
})
