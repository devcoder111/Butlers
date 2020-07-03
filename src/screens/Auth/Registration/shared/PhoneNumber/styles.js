import { StyleSheet, Platform } from 'react-native'
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: screenWidth * 0.1,
	},
	countryView: {
		color: '#8B8C8E',
		fontSize: 20,
		paddingLeft: 0,
		paddingVertical: 5,
		marginRight: 10,
		paddingTop: Platform.OS === 'ios' ? 10 : 0,
		paddingBottom: Platform.OS === 'ios' ? 10 : 0,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	inputView: {
		marginTop: 50,
		width: '100%',
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
		opacity: 0.8,
		fontSize: 16,
	},
	titleView: {
		marginTop: 30,
	},
	phone: {
		marginTop: 100,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},
	illustration: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	},
	inputWrap: {
		width: '80%',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	error: {
		fontSize: 14,
		lineHeight: 30,
		marginTop: 10,
		color: '#EE0B1C',
	},
})
