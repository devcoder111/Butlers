import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { getBasketArray, getTotalAmount } from '../../../../selectors/basket'
import { getFavouritesWithCount } from '../../../../selectors/favourites'

import { actions as favoritesActions } from '../../../../redux/favorites'
import { actions as basketActions } from '../../../../redux/basket'
import { actions as servicesActions } from '../../../../redux/services'

import FavouritesHomeView from './FavouritesHomeView'

class FavouritesHomeContainer extends Component {
	componentDidMount() {
		const { actions } = this.props
		actions.getFavoritesRequest()
		actions.getServiceTypesRequest()
	}

	navigateTo = to => {
		const { navigation } = this.props
		navigation.navigate(to)
	}

	addItemToBasket = item => {
		const { actions } = this.props
		actions.addItemRequest(item)
	}

	deleteItemFromBasket = id => {
		const { actions } = this.props
		actions.deleteItemRequest(id)
	}

	render() {
		const { favorites, isFavoritesLoading, total, actions, allServices } = this.props

		return (
			<FavouritesHomeView
				addItemToBasket={this.addItemToBasket}
				deleteItemFromBasket={this.deleteItemFromBasket}
				navigateTo={this.navigateTo}
				total={total}
				isFavoritesLoading={isFavoritesLoading}
				favorites={favorites}
				getFavorites={actions.getFavoritesRequest}
				deleteFavorite={actions.deleteFavoriteRequest}
				allServices={allServices}
			/>
		)
	}
}

const mapStateToProps = state => ({
	favorites: getFavouritesWithCount(state),
	isFavoritesLoading: state.favorites.isFavoritesLoading,
	basket: getBasketArray(state),
	total: getTotalAmount(state),
	allServices: state.services.types,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...favoritesActions,
			...basketActions,
			...servicesActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesHomeContainer)
