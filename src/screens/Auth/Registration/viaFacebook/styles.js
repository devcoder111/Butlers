import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		position: 'relative',
	},
	offerView: {
		marginTop: 30,
	},
	textColor: {
		color: '#1E272E',
		fontSize: 16,
	},
	countryView: {
		color: '#1E272E',
		fontSize: 20,
		paddingLeft: 0,
		paddingVertical: 5,
		paddingRight: 20,
		paddingTop: Platform.OS === 'ios' ? 10 : 0,
		paddingBottom: Platform.OS === 'ios' ? 10 : 0,
	},
	titleView: {
		marginTop: 30,
	},
	titleColor: {
		color: '#1E272E',
	},
	labelView: {
		marginTop: 10,
	},
	emailView: {
		marginTop: 30,
	},
	inputView: {
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		width: '100%',
	},
	forwardView: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginRight: 20,
		marginBottom: 80,
	},
	phone: { marginTop: 30, display: 'flex', flexDirection: 'row', alignItems: 'center' },
})
