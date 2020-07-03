import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

export default StyleSheet.create({
	scrollContainer: {
		paddingRight: 20,
		paddingLeft: 5,
		flex: 1,
	},
	container: {
		paddingHorizontal: 20,
		flex: 1,
	},
	text: {
		paddingTop: 20,
		fontSize: 16,
	},
	loaderWrap: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
	},
	button: {
		width: '100%',
		height: 60,
		marginVertical: 10,
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
	},
	listWrap: {
		justifyContent: 'flex-end',
		flex: 1,
		paddingBottom: 30,
	},
})
