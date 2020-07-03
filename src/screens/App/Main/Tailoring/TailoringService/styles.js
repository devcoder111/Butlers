import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../../../styles'

const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
	safeArea: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	bar: {
		paddingLeft: 20,
		paddingTop: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		padding: 20,
		paddingBottom: 5,
	},
	text: {
		fontSize: 16,
		fontWeight: '300',
		padding: 20,
		paddingTop: 5,
	},
	slider: {
		paddingHorizontal: 10,
		maxHeight: 150,
		minHeight: 150,
		width: '100%',
	},
	slide: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignContent: 'center',
		alignItems: 'center',
		width: 120,
		height: 150,
	},
	slideTouch: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	iconWrap: {
		width: 100,
		height: 90,
		margin: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#fff',
		borderRadius: 5,
		marginTop: 20,
	},
	tabText: {
		fontSize: 16,
		fontWeight: '400',
		paddingBottom: 20,
		color: '#1E272E',
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 20,
	},
	list: {
		paddingHorizontal: 20,
	},
	active: {
		backgroundColor: colors.green,
	},
	inactive: {
		backgroundColor: '#7E7E7E',
	},
	activeText: {
		fontWeight: '600',
	},
	inactiveText: {
		fontWeight: '300',
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
	error: {
		paddingHorizontal: 20,
		fontSize: 14,
		color: '#EE0B1C',
	},
})
