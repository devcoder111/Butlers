import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../styles'

export default StyleSheet.create({
	scrollContainer: {
		paddingRight: 20,
		paddingLeft: 5,
	},
	container: {
		paddingLeft: 15,
	},
	text: {
		paddingTop: 20,
		fontSize: 16,
	},
	loaderWrap: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
	},
	input: {
		width: '100%',
		color: '#1E272E',
		fontSize: 18,
		lineHeight: 24,
		paddingVertical: 10,
	},
	button: {
		width: '100%',
		height: 60,
		marginVertical: 50,
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
	},
	labelView: {
		marginTop: 30,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		width: '100%',
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 20,
	},
	safeContainer: {
		flex: 1,
	},
	warning: {
		paddingTop: 20,
		fontSize: 14,
		color: colors.green,
	},
	invalid: {
		paddingTop: 20,
		fontSize: 14,
		color: '#EE0B1C',
	},
})
