import { StyleSheet } from 'react-native'
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: screenWidth * 0.1,
	},
	offerView: {
		marginTop: 0,
		flexDirection: 'row',
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		width: '100%',
		marginTop: 40,
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
		marginTop: 10,
	},
	textColor: {
		color: '#1E272E',
		fontSize: 16,
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
	error: {
		fontSize: 14,
		lineHeight: 30,
		marginTop: 10,
		color: '#EE0B1C',
	},
})
