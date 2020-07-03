import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import Icon from '../../../assets/index'
import { colors } from '../../../styles'

import { getBasketProductItemsCount } from '../../../selectors/basket'

import { actions as basketActions } from '../../../redux/basket'

const styles = StyleSheet.create({
	forward: {
		display: 'flex',
		position: 'absolute',
		bottom: 50,
		right: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.green,
		opacity: 1,
		height: 30,
		width: 30,
		borderRadius: 15,
		zIndex: 1,
	},
	container: {
		position: 'relative',
	},
	countView: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 20,
		bottom: 20,
		height: 20,
		width: 20,
		borderRadius: 10,
		backgroundColor: 'red',
		zIndex: 1,
	},
	countText: {
		color: colors.white,
		fontSize: 10,
	},
})

const BasketButton = ({ navigateTo, backgroundColorText = colors.green, count }) => (
	<TouchableOpacity
		onPress={navigateTo}
		style={[styles.forward, { backgroundColor: backgroundColorText }]}
		disabled={count === 0}
	>
		<View style={styles.container}>
			{count ? (
				<View style={styles.countView}>
					<Text style={styles.countText}>{count}</Text>
				</View>
			) : null}

			<View>{Icon('Basket')}</View>
		</View>
	</TouchableOpacity>
)

const mapStateToProps = state => ({
	count: getBasketProductItemsCount(state),
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...basketActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketButton)
