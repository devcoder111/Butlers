import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../../styles'

const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		position: 'relative',
	},
	sectionMarginTop: {
		marginTop: 40,
	},
	subtitle: {
		marginTop: 20,
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: colors.green,
		overflow: 'hidden',
	},
	bar: {
		marginTop: 20,
		minHeight: 35,
		paddingLeft: 15,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	title: {
		backgroundColor: 'transparent',
		color: 'white',
		fontSize: 18,
	},
	scrollViewContent: {
		paddingHorizontal: 20,
		marginTop: deviceWidth * 0.5 + 20,
	},
	row: {
		height: 40,
		margin: 16,
		backgroundColor: colors.green,
		alignItems: 'center',
		justifyContent: 'center',
	},
	backgroundImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: deviceWidth,
		height: deviceWidth * 0.5,
		resizeMode: 'cover',
	},
	text: {
		fontSize: 18,
	},
	infoView: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: deviceWidth * 0.5,
		padding: 20,
		justifyContent: 'flex-end',
	},
	headerText: {
		fontSize: 24,
		fontWeight: '600',
		color: colors.black,
		paddingBottom: 5,
	},
	infoText: {
		fontSize: 16,
		color: colors.black,
		fontWeight: '400',
		lineHeight: 20,
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
