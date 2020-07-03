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
	card: {
		marginTop: 40,
		width: 60,
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: colors.lightGray,
		width: '100%',
		paddingVertical: 10,
		fontWeight: 'bold',
	},
	labelView: {
		marginTop: 50,
	},
	link: {
		marginTop: 40,
	},
})
