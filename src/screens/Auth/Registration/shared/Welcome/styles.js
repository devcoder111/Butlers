import { StyleSheet } from 'react-native'
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);


export default StyleSheet.create({
	container: {
		paddingHorizontal: screenWidth * 0.1,
		height: '100%',
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 20,
	},
	text: {
		color: '#67686C',
		opacity: 0.8,
		fontSize: 18,
		paddingTop: 20,
		textAlign: 'center',
		lineHeight: 26,
		fontFamily: 'Avenir',
		fontWeight: '500',
	},
	illustration: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	welcomeText: {
		textAlign: 'center',
		fontSize: 35,
		lineHeight: 50,
		color: '#525255',
		fontFamily: 'Circular Std',
		fontWeight: 'bold',
	},
})
