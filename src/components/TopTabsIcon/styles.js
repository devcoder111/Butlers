import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		width: 60,
		height: 60,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		borderWidth: 3,
		borderColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.35,
		shadowRadius: 3.84,
		elevation: 5,
	},
})

export default styles
