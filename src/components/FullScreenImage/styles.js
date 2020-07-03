import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
	wrap: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	cross: {
		position: 'absolute',
		right: 20,
		top: 20,
		width: '100%',
		height: 50,
		flex: 1,
		justifyContent: 'flex-end',
		flexDirection: 'row',
		zIndex: 100,
	},
})
