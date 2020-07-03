import { StyleSheet } from 'react-native'

import { colors } from '../../../../../styles'

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
		width: '45%',
		justifyContent: 'flex-end',
	},
})
