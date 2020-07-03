import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../../styles'

const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
	container: {
		padding: 20,
		position: 'relative',
		flex: 1,
	},
	inputContainer: {
		backgroundColor: colors.green,
	},
	inputView: {
		backgroundColor: colors.green,
		borderBottomWidth: 1,
		borderBottomColor: colors.white,
		width: '100%',
	},
	search: {
		paddingHorizontal: 20,
		paddingBottom: 20,
		width: '100%',
		backgroundColor: colors.green,
	},
	productsHeaderView: {
		paddingVertical: 10,
	},
	productsHeaderText: {
		fontSize: 16,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: colors.green,
	},
	loaderContainerWithPadding: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		width: deviceWidth,
		marginLeft: -20,
	},
})
