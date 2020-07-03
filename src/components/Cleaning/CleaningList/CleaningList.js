import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import CleaningListItem from '../CleaningListItem'

import { getProductsWithCount } from '../../../selectors/basket'

import { actions as basketActions } from '../../../redux/basket'

class CleaningList extends Component {
	addItemToBasket = item => {
		const { actions } = this.props
		actions.addItemRequest(item)
	}

	deleteItemFromBasket = id => {
		const { actions } = this.props
		actions.deleteItemRequest(id)
	}

	render() {
		const { product } = this.props

		return (
			<View>
				<FlatList
					data={product}
					renderItem={item => (
						<CleaningListItem
							addItemToBasket={this.addItemToBasket}
							deleteItemFromBasket={this.deleteItemFromBasket}
							data={item}
						/>
					)}
					keyExtractor={item => item.id}
				/>
			</View>
		)
	}
}

const mapStateToProps = state => ({
	product: getProductsWithCount(state),
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...basketActions,
		},
		dispatch,
	),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CleaningList)
