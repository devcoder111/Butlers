import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	text: {
		paddingTop: 20,
		fontWeight: '300',
		fontSize: 16,
	},
	favoritesList: {
		borderBottomColor: '#ddd',
		borderBottomWidth: 1,
		marginTop: 30,
	},
	loaderContainer: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		width: deviceWidth,
		marginLeft: -10,
	},
	spinnerWrap: {
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	loaderContainerWithPadding: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		width: deviceWidth,
		marginLeft: -20,
	},
})
