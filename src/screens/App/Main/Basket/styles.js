import { StyleSheet } from 'react-native'

import { colors } from '../../../../styles'

export default StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		position: 'relative',
		flex: 1,
	},
	sectionMarginTop: {
		marginTop: 40,
	},
	subtitle: {
		marginTop: 20,
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
	totalView: {
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	totalText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.black,
	},
	forwardView: {
		position: 'absolute',
		right: 10,
		bottom: 10,
	},
	applyButton: {
		backgroundColor: colors.green,
		color: colors.white,
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderRadius: 5,
	},
})
