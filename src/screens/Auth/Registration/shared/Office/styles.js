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
		borderBottomColor: '#ddd',
		width: '100%',
		marginTop: 50,
		paddingBottom: 10,
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
		color: '#67686C',
		opacity: 0.8,
		fontSize: 17,
	},
	titleView: {
		marginTop: 30,
	},
	offerView: {
		marginTop: 30,
		color: '#B5B7BA',
		flexDirection: 'row',
	},
})
