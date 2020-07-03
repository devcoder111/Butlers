import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: colors.green,
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	barContainer: {
		backgroundColor: colors.green,
	},
	title: {
		color: colors.white,
		fontSize: 20,
		fontWeight: '700',
	},
	subtitle: {
		fontSize: 16,
		fontWeight: '600',
		color: colors.white,
	},
	version: {
		fontSize: 14,
		color: '#fff',
	},
	searchWrap: {
		justifyContent: 'flex-end',
	},
	left: {
		maxWidth: '80%',
	},
})

export default styles
