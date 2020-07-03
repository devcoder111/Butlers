import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: '#2ED573',
	},
	headerArea: {
		height: 20,
	},
	headerText: {
		color: '#fff',
		fontSize: 40,
		fontFamily: 'Circular Std',
		textAlign: 'left',
		fontWeight: 'bold',
		left: 38,
		marginTop: '18%',
	},
	loginArea: {
		backgroundColor: '#fbfbfb',
		width: '100%',
		borderTopLeftRadius: 29,
		borderTopRightRadius: 29,
		paddingHorizontal: '10%',
		paddingVertical: '10%',
		width: '100%',
	},
	socialsList: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	hello: {
		color: '#525255',
		fontSize: 40,
		fontFamily: 'CircularStd-Bold',
		textAlign: 'left',
		// fontWeight: 'bold',
	},
	loginText: {
		fontSize: 17,
		lineHeight: 23,
		textAlign: 'left',
		color: '#67686c',
		opacity: 0.8,
		marginVertical: 20,
	},
	username: {
		width: '100%',
		height: 36,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		marginBottom: 40,
	},
	password: {
		width: '100%',
		height: 36,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		marginBottom: 30,
	},
	placeholder: {
		color: '#8B8c8e',
		fontSize: 18,
		fontFamily: 'Avenir',
		fontWeight: '400',
		textAlign: 'left',
	},
	donot: {
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#67686c',
		fontFamily: 'Avenir',
		fontSize: 14,
		lineHeight: 19,
	},
	createhere: {
		flexDirection: 'row',
		justifyContent: 'center',
		color: '#67686c',
		fontFamily: 'Avenir',
		fontSize: 14,
		lineHeight: 19,
	},
	signupLink: {
		color: '#2ED573',
	},
	bottomText: {
		marginVertical: '5%',
	},
	bottomButton: {},
	link: {
		textDecorationLine: 'underline',
		fontWeight: '500',
		fontSize: 16,
	},
	textColor: {
		color: '#1E272E',
		fontSize: 16,
	},
	loginWrap: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingBottom: 10,
	},
	logoView: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
})
