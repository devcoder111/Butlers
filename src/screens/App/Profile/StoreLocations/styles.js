import { StyleSheet, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	text: {
		fontSize: 16,
		paddingVertical: 20,
	},
})
