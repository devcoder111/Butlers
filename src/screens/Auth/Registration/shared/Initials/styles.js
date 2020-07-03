import { StyleSheet } from 'react-native'
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: screenWidth * 0.1,
	},
	titleTextView: {
		marginTop: 25,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: '#1E272E',
		width: '100%',
		paddingBottom: 10,
		marginTop: 30,
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
	},
	linkColor: {
		color: '#2ED573',
		fontSize: 15,
		fontFamily: 'Avenir',
		fontWeight: '400',
	},
	ButtonPosition: {
		marginTop: 120,
	},
	textColor: {
		color: '#B5B7BA',
		fontSize: 15,
	},
	terms: {
		textDecorationLine: 'underline',
	},
	illustration: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	},
})
