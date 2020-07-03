import { StyleSheet, Platform } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingHorizontal: 20,
	},
	labelView: {
		marginTop: 25,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: colors.black,
		paddingVertical: 10,
		width: '100%',
	},
	fixedItem: {
		display: 'flex',
		// position: 'absolute',
		bottom: 5,
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 1,
		padding: 10,
		width: '100%',
		zIndex: 1,
		alignSelf: 'center',
		color: '#fff',
		height: 40,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	button: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		marginTop: 20,
	},
	centeredText: {
		textAlign: 'center',
		color: colors.white,
	},
	inputText: {
		fontSize: 20,
		paddingLeft: 0,
		paddingVertical: 5,
		paddingRight: 20,
		paddingTop: Platform.OS === 'ios' ? 10 : 0,
		paddingBottom: Platform.OS === 'ios' ? 10 : 0,
	},
})
