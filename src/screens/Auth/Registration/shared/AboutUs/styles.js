import { StyleSheet } from 'react-native'
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: screenWidth * 0.1,
		position: 'relative',
	},
	textColor: {
		color: '#67686C',
		opacity: 0.8,
		fontSize: 16,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: '#1E272E',
		width: '100%',
	},
	firstOffer: {
		marginTop: 30,
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 80,
	},
	modal: {
		backgroundColor: '#1E272E',
		opacity: 0.8,
	},
	titleView: {
		marginTop: 30,
	},
	offerView: {
		flexDirection: 'row',
		marginBottom: 10
	}
})
