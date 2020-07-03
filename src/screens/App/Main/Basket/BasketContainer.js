/* eslint-disable camelcase */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { getBasketArray, getTotalAmount } from '../../../../selectors/basket'
// import BasketView from './BasketView'
import BasketView from './BasketViewChanged'

import { actions as profileActions } from '../../../../redux/profile'
import { actions as basketActions } from '../../../../redux/basket'
import { actions as ordersActions } from '../../../../redux/orders'

class BasketContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			comment: '',
			promoCode: '',
			modalVisible: false,
			bonus_id: 0,
		}
	}

	componentDidMount = () => {
		const { basket, actions, doneOrder } = this.props
		const testArr = basket.map(item => {
			return {
				service_id: item.id,
				material: 'test',
				color: 'white',
				count: item.count,
				// coordinates: item.coordinates ? item.coordinates : []
			}
		})
		console.log(testArr, 'testArr')
		actions.createOrderRequest({ order_items: testArr })
		actions.getOrdersRequest()
		actions.getBonusesRequest()
		actions.getPromocodesRequest()
	}

	navigateTo = link => {
		const { navigation } = this.props
		navigation.navigate(link)
	}

	onChangeDropdown = value => {
		const { bonuses, actions, doneOrder } = this.props
		if (value === 'My discounts') {
			this.setState({ bonus_id: 0 })
			actions.updateOrderRequest({ bonus_id: null, id: doneOrder.id })
		} else {
			const selectedBonus = bonuses.filter(el => {
				return el.bonus_name === value
			})
			this.setState({ bonus_id: selectedBonus[0].id })
			actions.updateOrderRequest({ bonus_id: selectedBonus[0].id, id: doneOrder.id })
		}
	}

	forwardTo = () => {
		const { basket, actions, doneOrder } = this.props
		const testArr = basket.map(item => {
			return {
				service_id: item.id,
				material: 'test',
				color: 'white',
				count: item.count,
				// coordinates: item.coordinates ? item.coordinates : []
			}
		})
		console.log(testArr, 'testArr')
		actions.updateOrderRequest({ order_items: testArr, id: doneOrder.id })
		const { navigation, applyPromoCodeResponse } = this.props
		const { comment, promoCode, bonus_id } = this.state
		const wrongPromocode = ''
		if (applyPromoCodeResponse.success) {
			actions.setCommentRequest({ comment, promoCode })
		} else actions.setCommentRequest({ comment, wrongPromocode })
		navigation.navigate('OrderCompletion', { bonus_id })
	}

	onClear = name => {
		return () => this.setState({ [name]: '' })
	}

	onChange = name => {
		return text => this.setState({ [name]: text })
	}

	addItemToBasket = item => {
		const { actions, basket, doneOrder } = this.props
		actions.addItemRequest(item)
		const testArr = basket.map(item => {
			return {
				service_id: item.id,
				material: 'test',
				color: 'white',
				count: item.count,
			}
		})
		actions.updateOrderRequest({ order_items: testArr, id: doneOrder.id })
	}

	deleteItemFromBasket = (id, index) => {
		const { actions, basket, doneOrder } = this.props
		const payload = {
			id, 
			index
	  	}
		actions.deleteItemRequest(payload)
		const testArr = basket.map(item => {
		return {
			service_id: item.id,
			material: 'test',
			color: 'white',
			count: item.count,
		}
		})
		actions.updateOrderRequest({ order_items: testArr, id: doneOrder.id })
	}

	setModalVisible = () => {
		const { modalVisible } = this.state
		this.setState({ modalVisible: !modalVisible })
	}

	onApplyPromoCode = promocode => {
		const { actions, doneOrder } = this.props
		const orderId = doneOrder.order ? doneOrder.order.id : doneOrder.id
		const config = {
			order_id: orderId,
			promo_code: promocode,
		}
		actions.applyPromoCodeRequest(config)
		setTimeout(() => {
			actions.getOrderByIdRequest(orderId)
		}, 2000)
	}

	static navigationOptions = {
		header: null,
	}

	render() {
		const {
			navigation,
			basket,
			total,
			user,
			applyPromoCodeResponse,
			bonuses,
			doneOrder,
			createOrderError,
		} = this.props
		const { comment, promoCode, modalVisible, bonus_id } = this.state
		const bonusesNames = [{ value: 'My discounts' }]
		bonuses.forEach(el => {
			const item = { value: el.bonus_name }
			bonusesNames.push(item)
		})
		return (
			<BasketView
				addItem={this.addItemToBasket}
				deleteItem={this.deleteItemFromBasket}
				forwardTo={this.forwardTo}
				comment={comment}
				promoCode={promoCode}
				onChange={this.onChange}
				onClear={this.onClear}
				basket={basket}
				total={total}
				navigation={navigation}
				user={user}
				setModalVisible={this.setModalVisible}
				modalVisible={modalVisible}
				onApplyPromoCode={this.onApplyPromoCode}
				applyPromoCodeResponse={applyPromoCodeResponse}
				bonusesNames={bonusesNames}
				onChangeDropdown={this.onChangeDropdown}
				bonus_id={bonus_id}
				currentOrder={doneOrder}
			/>
		)
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
	basket: getBasketArray(state),
	total: getTotalAmount(state),
	doneOrder: state.orders.doneOrder,
	applyPromoCodeResponse: state.basket.applyPromoCodeResponse,
	bonuses: state.profile.bonuses,
	isOrderByIdLoading: state.orders.isOrderByIdLoading,
	createOrderError: state.orders.createOrderError,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
			...basketActions,
			...ordersActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer)
