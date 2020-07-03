import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		position: 'relative',
	},
	titleView: {
		marginTop: 30,
	},
	titleColor: {
		color: '#000',
	},
	// placeholder: {
	// 	color: '#8B8c8e',
	// 	fontSize: 18,
	// 	fontFamily: 'Avenir Roman',
	// 	textAlign: 'left',
	// },
	offerView: {
		marginTop: 20,
	},
	marginTop30: {
		marginTop: '25%',
		fontSize: 21,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		width: '100%',
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 80,
	},
	modal: {
		backgroundColor: '#000',
		opacity: 0.8,
	},
	button: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		marginTop: 20,
	},
})
