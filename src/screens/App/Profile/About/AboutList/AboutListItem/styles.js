import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../styles'

export default StyleSheet.create({
	itemWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 20,
		marginVertical: 0,
		borderTopColor: '#EEEEEE',
		borderTopWidth: 1,
	},
	itemText: {
		fontSize: 16,
		fontWeight: '300',
		color: colors.black,
	},
})
