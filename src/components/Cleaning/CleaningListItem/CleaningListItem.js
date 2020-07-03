import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import { colors } from '../../../styles'

const styles = StyleSheet.create({
	item: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
	},
	heart: {
		marginLeft: 10,
	},
	price: {
		marginLeft: 10,
	},
	title: {
		fontWeight: 'bold',
	},
	flex: {
		display: 'flex',
		flexDirection: 'row',
	},
	sign: {
		fontSize: 25,
	},
	marginRight: {
		marginRight: 5,
	},
})

const CleaningListItem = ({ data: { item }, addItemToBasket, deleteItemFromBasket }) => {
	const roundNum = (x, n) => {
		if (isNaN(x) || isNaN(n)) return false
		const result = (+x).toFixed(n).replace('.', ',')
		const out = result
			.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
			.split(' ')
			.join('.')
		return out
	}
	return (
		<View style={styles.item}>
			<View style={styles.flex}>
				<View>
					<Text style={styles.title}>{item.title}</Text>
				</View>
				<View style={styles.heart}>
					<Icon color={colors.green} name="heart" size={25} />
				</View>
				<View style={styles.price}>
					<Text color={colors.black}>{roundNum(item.price, 2)} DKK</Text>
				</View>
			</View>
			<View style={styles.flex}>
				{item.count ? (
					<View style={styles.flex}>
						<TouchableWithoutFeedback
							onPress={() => {
								deleteItemFromBasket(item.id)
							}}
						>
							<View style={styles.signView}>
								<Text style={[styles.sign, styles.marginRight]}>-</Text>
							</View>
						</TouchableWithoutFeedback>
						<View>
							<Text style={[styles.sign, styles.marginRight]}>{item.count}</Text>
						</View>
						<TouchableWithoutFeedback
							onPress={() => {
								addItemToBasket(item)
							}}
						>
							<View style={styles.signView}>
								<Text style={styles.sign}>+</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
				) : (
					<TouchableWithoutFeedback
						onPress={() => {
							addItemToBasket(item)
						}}
					>
						<View style={styles.signView}>
							<Text style={styles.sign}>+</Text>
						</View>
					</TouchableWithoutFeedback>
				)}
			</View>
		</View>
	)
}

export default CleaningListItem
