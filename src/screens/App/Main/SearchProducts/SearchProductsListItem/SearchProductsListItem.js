import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const styles = StyleSheet.create({
	item: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
	},

	title: {
		fontWeight: '400',
		fontSize: 16,
	},
	flex: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		alignContent: 'center',
	},
})

const SearchProductsListItem = ({ data: { item }, forwardTo }) => (
	<TouchableWithoutFeedback onPress={() => forwardTo(item.type_id)}>
		<View style={styles.item}>
			<View style={styles.flex}>
				<View>
					<Text style={styles.title}>{item.service_name}</Text>
				</View>
			</View>
		</View>
	</TouchableWithoutFeedback>
)

export default SearchProductsListItem
