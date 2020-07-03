import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	offerView: {
		marginTop: 30,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: '#1E272E',
		width: '100%',
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 80,
	},
	labelView: {
		marginTop: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textColor: {
		color: '#1E272E',
		fontSize: 16,
	},
	titleView: {
		marginTop: 30,
	},
	link: {
		textDecorationLine: 'underline',
		paddingVertical: 20,
		fontSize: 18,
		fontWeight: '300',
	},
	text: {
		paddingTop: 20,
		fontSize: 16,
		fontWeight: '300',
	},
	illustration: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	},
})
