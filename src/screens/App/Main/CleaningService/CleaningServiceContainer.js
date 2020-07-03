import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import CleaningServiceView from './CleaningServiceView'
import { actions as servicesActions } from '../../../../redux/services'
import { actions as basketActions } from '../../../../redux/basket'
import { actions as favouriteActions } from '../../../../redux/favorites'
import { actions as profileActions } from '../../../../redux/profile'

import { getServiceWithCount } from '../../../../selectors/services'

class CleaningServiceContainer extends Component {
	static navigationOptions = {
		header: null,
	}

	componentDidMount() {
		const { actions, navigation } = this.props
		const id = navigation.getParam('id', 0)
		actions.getServiceByIdRequest(id)
		actions.getFaqRequest()
	}

	getCategoryInfo = () => {
		const { categories, navigation } = this.props
		const id = navigation.getParam('id', 0)
		const category = categories.find(item => item.id === id)
		return category
	}

	navigateTo = link => {
		const { navigation } = this.props
		navigation.navigate(link)
	}

	addItemToBasket = item => {
		const { actions } = this.props
		actions.addItemRequest(item)
		this.forceUpdate()
	}

	deleteItemFromBasket = (id, index) => {
		const { actions } = this.props
		const payload = {
			id, 
			index
		  }
		actions.deleteItemRequest(payload)
		this.forceUpdate()
	}

	addFavorite = id => {
		const { actions } = this.props
		actions.addFavoriteRequest(id)
	}

	deleteFavorite = id => {
		const { actions } = this.props
		actions.deleteFavoriteRequest(id)
	}

	render() {
		const { navigation, services, servicesLoading, faq, categories } = this.props
		const id = navigation.getParam('id', 0)
		return (
			<CleaningServiceView
				services={services}
				addItemToBasket={this.addItemToBasket}
				deleteItemFromBasket={this.deleteItemFromBasket}
				addFavorite={this.addFavorite}
				deleteFavorite={this.deleteFavorite}
				navigateTo={this.navigateTo}
				navigation={navigation}
				servicesLoading={servicesLoading}
				id={id}
				faq={faq}
				getCategoryInfo={this.getCategoryInfo}
				categories={categories}
			/>
		)
	}
}

const mapStateToProps = state => ({
	services: getServiceWithCount(state),
	servicesLoading: state.services.isServiceLoading,
	categories: state.services.services,
	faq: state.profile.faq,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...servicesActions,
			...basketActions,
			...favouriteActions,
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(CleaningServiceContainer)
