import { StyleSheet, Platform } from 'react-native'

import { colors } from '../../../../styles'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		position: 'relative',
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: colors.black,
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
		width: '50%',
	},
	floor: {
		width: '20%',
	},

	phone: { display: 'flex', flexDirection: 'row', alignItems: 'center' },

	isInfoSaved: {
		color: colors.green,
	},
	inputText: {
		width: '100%',
		fontSize: 20,
		paddingLeft: 0,
		paddingVertical: 5,
		paddingRight: 20,
		paddingTop: Platform.OS === 'ios' ? 10 : 0,
		paddingBottom: Platform.OS === 'ios' ? 10 : 0,
	},
})
