import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../styles'

export default StyleSheet.create({
	itemTitle: {
		fontSize: 18,
		fontWeight: '500',
		marginVertical: 10,
		color: colors.black,
	},
	itemContainer: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#EEEEEE',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
