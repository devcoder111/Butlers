import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		position: 'relative',
		justifyContent: 'flex-start',
	},
	sectionMarginTop: {
		marginTop: 40,
	},
	subtitle: {
		marginTop: 20,
	},
	close: {
		position: 'absolute',
		top: 20,
		right: 20,
	},
	fixedItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: 'absolute',
		bottom: 1,
		opacity: 1,
		padding: 10,
		zIndex: 1,
		alignSelf: 'center',
		borderTopWidth: 1,
		borderTopColor: colors.gray,
		paddingHorizontal: 20,
		backgroundColor: colors.white,
		width: '100%',
	},
	sendButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: colors.green,
		padding: 7,
		alignItems: 'center',
		alignSelf: 'flex-end',
		justifyContent: 'center',
	},
	addFileButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		padding: 7,
		alignItems: 'center',
		alignSelf: 'flex-end',
		justifyContent: 'center',
	},
	separator: {
		height: 130,
	},
	scrollwrap: {
		justifyContent: 'space-evenly',
	},
})
