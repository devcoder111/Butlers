import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { Animated } from 'react-native'
import { actions as profileActions } from '../../../../../redux/profile'

import DebitCardView from './DebitCardView'

class DebitCardContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			visibleModal: false,
		}
		this.shown = new Animated.Value(0)
	}

	setPrimaryCard = () => {
		const { actions, card } = this.props
		actions.setPrimaryCardRequest(card.id)
	}

	deleteCard = () => {
		this.setState({ visibleModal: true })
	}

	onModalClose = () => {
		this.setState({ visibleModal: false })
	}

	onDeleteCard = () => {
		const { actions, card, navigation } = this.props
		const config = { card_id: card.id }
		actions.deleteCardRequest(config)
		actions.cleanCardsRequest()
		actions.getCardsRequest()
		this.onModalClose()
		navigation.navigate('PaymentsHome')
	}

	componentWillUnmount = () => {
		const { actions } = this.props
		actions.cleanPrimaryRequest()
	}

	render() {
		const { navigation, card, setAsPrimaryResponse } = this.props
		const { visibleModal } = this.state
		return (
			<DebitCardView
				navigation={navigation}
				data={card}
				deleteCard={this.deleteCard}
				onModalClose={this.onModalClose}
				visibleModal={visibleModal}
				onDeleteCard={this.onDeleteCard}
				setPrimaryCard={this.setPrimaryCard}
				setAsPrimaryResponse={setAsPrimaryResponse}
			/>
		)
	}
}

const mapStateToProps = ({ profile: { card, setAsPrimaryResponse } }) => ({
	card,
	setAsPrimaryResponse,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(DebitCardContainer)
