import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width
export default StyleSheet.create({
	scrollContainer: {
		paddingRight: 20,
		paddingLeft: 5,
	},
	container: {
		paddingLeft: 15,
	},
	loaderContainerWithPadding: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		width: deviceWidth,
		marginLeft: -20,
	},
	spinnerWrap: {
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
})
