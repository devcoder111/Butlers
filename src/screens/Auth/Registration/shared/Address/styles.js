import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: '#1E272E',
		width: '100%',
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 80,
	},
	labelView: {
		marginTop: 50,
	},
	textColor: {
		color: '#1E272E',
		fontSize: 16,
	},
	titleView: {
		marginTop: 30,
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
})
