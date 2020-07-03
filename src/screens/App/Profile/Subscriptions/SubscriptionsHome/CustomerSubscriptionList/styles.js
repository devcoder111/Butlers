import { StyleSheet } from 'react-native'

import { colors } from '../../../../../../styles'

export default StyleSheet.create({
	container: {
		marginTop: 15,
		paddingVertical: 25,
		paddingHorizontal: 20,
		borderRadius: 10,
		borderColor: '#d9d9d9',
		borderWidth: 1,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleText: {
		fontSize: 19,
		lineHeight: 22,
		color: colors.black,
	},
	headerRight: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	priceText: {
		fontSize: 19,
		lineHeight: 24,
		fontWeight: 'bold',
		color: colors.black,
		marginBottom: 10,
	},
	infoView: {
		marginTop: 60,
	},
	infoText: {
		fontSize: 16,
		lineHeight: 24,
		color: colors.black,
	},

	containerActive: {
		marginTop: 15,
		paddingVertical: 25,
		paddingHorizontal: 20,
		borderRadius: 10,
		borderWidth: 0,
	},
	headerActive: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleTextActive: {
		fontSize: 19,
		lineHeight: 22,
		color: colors.white,
	},
	headerRightActive: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	priceTextActive: {
		fontSize: 19,
		lineHeight: 24,
		fontWeight: 'bold',
		color: colors.white,
		marginBottom: 10,
	},
	infoViewActive: {
		marginTop: 60,
	},
	infoTextActive: {
		fontSize: 16,
		lineHeight: 24,
		color: colors.white,
	},

	switch: {
		borderWidth: 1,
		borderColor: '#EEEEEE',
		borderRadius: 15,
	},
	switchActive: {
		borderWidth: 1,
		borderColor: colors.white,
		borderRadius: 15,
	},
})
