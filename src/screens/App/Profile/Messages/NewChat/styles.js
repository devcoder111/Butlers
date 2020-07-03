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
	subtitle: {
		marginTop: 20,
	},
	forwardView: {
		position: 'absolute',
		right: 10,
		bottom: 10,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: colors.gray,
		paddingVertical: 10,
		width: '100%',
	},
	inputTopView: {
		borderTopWidth: 1,
		borderTopColor: colors.gray,
	},
})
