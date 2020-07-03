import { StyleSheet } from 'react-native'
import { colors } from '../../../../../styles'
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: screenWidth * 0.1,
		position: 'relative',
	},
	titleView: {
		marginTop: 30,
	},
	titleColor: {
		color: '#67686C',
		opacity: 0.8,
		fontSize: 17,
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
	resendCode: {
		paddingTop: 20,
	},
	resentText: {
		color: colors.green,
	},
})
