import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		position: 'relative',
	},
	sectionMarginTop: {
		marginTop: 40,
	},
	topBorder: {
		marginTop: 60,
		borderTopWidth: 1,
		borderTopColor: colors.gray,
	},
})
