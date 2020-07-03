import { StyleSheet } from 'react-native'
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: screenWidth * 0.1,
	},
	textColor: {
		color: '#67686C',
		opacity: 0.8,
		fontSize: 17,
	},
	titleView: {
		marginTop: 25,
	},
	titleLine: {
		marginTop: 30,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleLineConfirm: {
		marginTop: 0,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	inputView: {
		width: '100%',
		marginTop: 60
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
	textInput: {
		width: '100%',
		height: 45,
		fontSize: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		marginBottom: 30,
	},
	hideButton: {
		fontSize: 16,
		fontWeight: '300',
		color: '#1E272E',
	},
})
