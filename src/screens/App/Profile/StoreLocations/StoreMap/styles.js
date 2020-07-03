import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create({
	text: {
		paddingTop: 20,
		fontSize: 16,
		paddingLeft: 20,
	},
	map: {
		width: deviceWidth,
		height: deviceHeight * 0.3,
		backgroundColor: '#bbb',
		marginVertical: 10,
		...StyleSheet.absoluteFillObject,
	},
	listContainer: {
		...StyleSheet.absoluteFillObject,
		top: deviceHeight * 0.315,
		height: deviceHeight * 0.35,
	},
	filler: {
		height: 30,
	},
})
