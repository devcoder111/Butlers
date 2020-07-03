import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import PaymentsHomeView from './PaymentsHomeView'
import { getCards } from '../../../../../selectors/cards'

import { actions as profileActions } from '../../../../../redux/profile'

class PaymentsHomeContainer extends Component {
	onComponentFocus = () => {
		const { actions, user } = this.props
		actions.getCardsRequest(user.id)
	}

	render() {
		const { navigation, cards, customerGroup } = this.props
		return (
			<PaymentsHomeView
				navigation={navigation}
				cards={cards}
				customerGroup={customerGroup}
				onComponentFocus={this.onComponentFocus}
			/>
		)
	}
}

const mapStateToProps = state => ({
	cards: getCards(state),
	user: state.auth.user,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsHomeContainer)
