import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	listItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		paddingVertical: 20,
		paddingHorizontal: 20,

		borderBottomWidth: 1,
		borderBottomColor: '#EEEEEE',
	},
	title: {
		paddingTop: 30,
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#EEEEEE',
	},
})
