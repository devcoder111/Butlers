import { StyleSheet, Platform } from 'react-native'
import { colors } from '../../../../styles'

export default StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		paddingVertical: 20,
		position: 'relative',
		flex: 1,
	},
	sectionMarginTop: {
		marginTop: 40,
	},
	subtitle: {
		marginTop: 20,
	},
	express: {
		display: 'flex',
	},
	expressText: {
		fontWeight: 'bold',
	},
	isSameAddress: {
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	isAdressSameTitleView: {
		width: '85%',
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: colors.black,
		paddingVertical: 10,
		width: '100%',
	},
	wrongData: {
		color: 'red',
	},
	labelView: {
		marginTop: 50,
	},
	midLane: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	houseNumber: {
		width: '45%',
	},
	floor: {
		width: '45%',
	},
	dropTitleView: {
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	dropTitleText: {
		fontSize: 18,
		color: colors.black,
	},
	forwardView: {
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	time: {
		color: colors.gray,
	},
	pickTime: {
		width: Platform.OS === 'ios' ? '45%' : '50%',
		justifyContent: 'flex-end',
	},
	modalContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: colors.white,
	},
	pickerContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.gray,
		padding: 15,
	},
	picker: {
		// backgroundColor: colors.gray,
	},
	pickerCancel: {
		fontSize: 15,
		color: colors.gray,
	},
	pickerConfirm: {
		fontSize: 15,
		color: colors.green,
	},
	timeText: {
		fontSize: 18,
		paddingLeft: 0,
		paddingRight: 20,
		paddingTop: Platform.OS === 'ios' ? 10 : 0,
		paddingBottom: 5,
		color: colors.black,
	},
	containerPicker: {
		flex: 1,
		paddingTop: 40,
		alignItems: "center"
	  }
})
