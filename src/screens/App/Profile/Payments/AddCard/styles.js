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
	margin: {
		height: 20,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: colors.black,
		width: '100%',
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 80,
	},
})
