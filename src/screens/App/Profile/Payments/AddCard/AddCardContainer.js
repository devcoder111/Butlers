import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { Animated } from 'react-native'
import { bindActionCreators } from 'redux'

import { actions as profileActions } from '../../../../../redux/profile'

import AddCardView from './AddCardView'

class AddCardContainer extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			expireDate: '',
			invalidDate: false,
			validationError: false,
			cardNumber: '',
			cvv: '',
			visibleModal: false,
		}
		this.shown = new Animated.Value(0)
		this.shownDate = new Animated.Value(0)
	}

	componentDidMount() {}

	onChange = text => {
		this.setState({ cardNumber: text })
		this.validate(text)
	}

	validate = text => {
		const reg = /^([0-9_-]+\.)*[0-9_-]{16,16}$/
		if (reg.test(text)) {
			this.setState({ validationError: false })
			Animated.timing(this.shown, {
				toValue: 0,
				duration: 300,
			}).start()
		} else {
			this.setState({ validationError: true })
			Animated.timing(this.shown, {
				toValue: 1,
				duration: 300,
			}).start()
		}
	}

	onChangeCvv = data => {
		this.setState({ cvv: data })
	}

	sendData = () => {
		const { actions } = this.props
		const { cvv, cardNumber, expireDate } = this.state

		const config = {
			card_number: cardNumber,
			card_expiration: expireDate.slice(0, 2) + expireDate.slice(3, 5),
			card_cvd: cvv,
		}
		actions.saveCardRequest(config)

		this.setState({ visibleModal: true })
	}

	onModalClose = () => {
		this.setState({ visibleModal: false })
	}

	onClear = name => {
		return () => this.setState({ [name]: '' })
	}

	onChangeDate = date => {
		this.setState({
			expireDate: date.length === 4 ? `${date.slice(0, 2)}/${date.slice(2, 4)}` : date,
		})
		const currentYear = new Date()
			.getFullYear()
			.toString()
			.slice(2, 4)
		this.setState({
			invalidDate: date.slice(0, 2) > 13 || date.slice(-2) > +currentYear + 4,
		})
		if (date.slice(0, 2) > 12 || date.slice(-2) > +currentYear + 4) {
			this.setState({
				invalidDate: true,
			})
			Animated.timing(this.shownDate, {
				toValue: 1,
				duration: 300,
			}).start()
		} else {
			this.setState({
				invalidDate: false,
			})
			Animated.timing(this.shownDate, {
				toValue: 0,
				duration: 300,
			}).start()
		}
	}

	stopCheckDate = date => {
		this.setState({ expireDate: date })
		const currentYear = new Date()
			.getFullYear()
			.toString()
			.slice(2, 4)
		this.setState({
			invalidDate: date.slice(0, 2) > 13 || date.slice(-2) > +currentYear + 3,
		})
		if (date.slice(0, 2) > 13 || date.slice(-2) > +currentYear + 3) {
			this.setState({
				invalidDate: true,
			})
			Animated.timing(this.shownDate, {
				toValue: 1,
				duration: 300,
			}).start()
		} else {
			this.setState({
				invalidDate: false,
			})
			Animated.timing(this.shownDate, {
				toValue: 0,
				duration: 300,
			}).start()
		}
	}

	onAddCard = () => {
		const { navigation } = this.props
		const { actions, cards, saveCardResponse } = this.props
		if (!cards[0]) {
			actions.setPrimaryCardRequest(saveCardResponse[1])
		}
		actions.cleanCardsRequest()
		actions.getCardsRequest()
		navigation.navigate('PaymentsHome')
		this.onModalClose()
	}

	render() {
		const { navigation, card, user } = this.props
		const { expireDate, cardNumber, validationError, cvv, visibleModal, invalidDate } = this.state
		return (
			<AddCardView
				navigation={navigation}
				data={card}
				expireDate={expireDate}
				onChange={this.onChange}
				onClear={this.onClear}
				cardNumber={cardNumber}
				validationError={validationError}
				shown={this.shown}
				cvv={cvv}
				onChangeCvv={this.onChangeCvv}
				sendData={this.sendData}
				onChangeDate={this.onChangeDate}
				onModalClose={this.onModalClose}
				visibleModal={visibleModal}
				onAddCard={this.onAddCard}
				stopCheckDate={this.stopCheckDate}
				invalidDate={invalidDate}
				shownDate={this.shownDate}
				user={user}
			/>
		)
	}
}

const mapStateToProps = state => ({
	card: state.profile.card,
	cards: state.profile.cards,
	user: state.auth.user,
	saveCardResponse: state.profile.saveCardResponse,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(AddCardContainer)
