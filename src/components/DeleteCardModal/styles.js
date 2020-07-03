import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	modalWrap: {
		width: '90%',
		marginHorizontal: 20,
		height: 300,
		paddingHorizontal: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		position: 'relative',
		backgroundColor: '#fff',
		borderRadius: 8,
	},
	text: {
		color: '#1E272E',
		fontSize: 16,
		paddingTop: 20,
		textAlign: 'center',
		paddingBottom: 20,
	},
	textNoPadding: {
		color: '#1E272E',
		fontSize: 16,
		textAlign: 'center',
	},
	header: {
		color: '#1E272E',
		fontSize: 30,
		textAlign: 'center',
		fontWeight: '700',
	},
	touchable: {
		position: 'absolute',
		right: 0,
		top: 0,
		padding: 20,
	},
})
