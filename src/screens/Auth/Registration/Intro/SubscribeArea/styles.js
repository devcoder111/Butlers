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
	marginTop30: {
		marginTop: 20,
		fontSize: 21,
	},
	button: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		marginTop: 20,
	},
	image: {
		width: '100%',
		height: 'auto',
		resizeMode: 'cover',
	},
	imageWrap: {
		width: '100%',
		height: 'auto',
		overflow: 'hidden',
	},
	createhere: {
		flexDirection: 'row',
		justifyContent: 'center',
		color: '#67686c',
		fontFamily: 'Avenir',
		fontWeight: '500',
		fontSize: 19,
		lineHeight: 19,
	},
	signupLink: {
		color: '#2ED573',
	},
	discover: {
		position: 'absolute',
		bottom: '10%',
		width: '100%',
		marginLeft: 20,
		justifyContent: 'center',
	},
})
