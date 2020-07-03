import { StyleSheet } from 'react-native'
import { colors } from '../../../../styles'

export default StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	ordersList: {
		marginTop: 20,
	},
	loaderContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	fixedItem: {
		display: 'flex',
		position: 'absolute',
		bottom: 55,
		justifyContent: 'center',
		backgroundColor: colors.green,
		alignItems: 'center',
		opacity: 1,
		padding: 10,
		paddingRight: 60,
		paddingLeft: 60,
		borderRadius: 5,
		zIndex: 1,
		alignSelf: 'center',
		color: '#fff',
	},
	centeredText: {
		textAlign: 'center',
		color: colors.white,
	},
	wrap: {
		height: '100%',
		width: '100%',
	},
})
