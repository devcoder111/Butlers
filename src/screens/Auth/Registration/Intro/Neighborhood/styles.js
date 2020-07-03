import { StyleSheet } from 'react-native'
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: screenWidth * 0.1,
		paddingRight: screenWidth * 0.1,
		width: screenWidth,
		position: 'relative',
		textAlign: 'center',
	},
	titleView: {
		marginVertical: 30,
		color: '#67686C',
		fontFamily: 'AvenirLTStd-Medium',
		opacity: 0.8
	},
	titleColor: {
		color: '#67686C',
		fontSize: 17,
		lineHeight: 23,
		fontFamily: 'Avenir',
		fontWeight: '500',
	},
	bottomButton: {
		backgroundColor: '#D8D8D8',
	},
	labelView: {
		marginTop: 60,
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
		marginBottom: 80,
	},
	illustration: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	},
})
