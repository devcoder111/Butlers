import { StyleSheet } from 'react-native'

import { colors } from '../../../../styles'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		position: 'relative',
		marginHorizontal: 20,
		marginTop: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	button: {
		height: 60,
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		margin: 15,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '500',
	},
	bottomWrap: {
		width: '100%',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 150,
		justifyContent: 'flex-end',
		padding: 15,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	header: {
		fontSize: 26,
		lineHeight: 24,
		fontWeight: '600',
		color: '#263238',
	},
	text: {
		padding: 15,
		fontSize: 16,
		lineHeight: 24,
		fontWeight: '200',
		color: '#686868',
	},
})
