import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	safeArea: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	bar: {
		paddingHorizontal: 20,
		paddingTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		padding: 20,
	},
	text: {
		fontSize: 16,
		fontWeight: '300',
		paddingHorizontal: 20,
		color: colors.gray,
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 20,
	},
	buttonIcon: {
		height: 80,
		width: 80,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		borderRadius: 40,
		borderColor: '#1E272E',
		borderWidth: 1,
		marginTop: 20,
	},
	buttonText: {
		fontSize: 12,
		fontWeight: '400',
		color: '#1E272E',
		paddingTop: 10,
	},
	icon: {
		fontSize: 40,
		fontWeight: '300',
	},
	buttonWrap: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 80,
		marginLeft: 20,
	},
	photoRow: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 40,
		resizeMode: 'cover',
	},
})
