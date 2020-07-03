import { StyleSheet } from 'react-native'
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: screenWidth * 0.1,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: '#1E272E',
		width: '100%',
		marginTop: 100,
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
	textColor: {
		fontSize: 17,
		lineHeight: 23,
		color: '#67686C',
		opacity: 0.8,
	},
	titleView: {
		marginTop: 30,
	},
	illustration: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	},
})
