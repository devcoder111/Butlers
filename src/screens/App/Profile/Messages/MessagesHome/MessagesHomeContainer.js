import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import MessagesHomeView from './MessagesHomeView'
import { getCards } from '../../../../../selectors/cards'

import { actions as profileActions } from '../../../../../redux/profile'

class MessagesHomeContainer extends Component {
	componentDidMount() {
		const { actions, user } = this.props
		actions.getCardsRequest(user.id)
		actions.getSubjectsRequest()
		actions.getMessagesRequest()
	}

	navigateTo = (link, data = '') => {
		const { navigation } = this.props
		navigation.navigate(link, data)
	}

	render() {
		const { navigation, cards, subjects, messages } = this.props
		return (
			<MessagesHomeView
				subjects={subjects}
				navigateTo={this.navigateTo}
				navigation={navigation}
				cards={cards}
				messages={messages}
			/>
		)
	}
}

const mapStateToProps = state => ({
	cards: getCards(state),
	user: state.auth.user,
	subjects: state.profile.subjects,
	messages: state.profile.messages,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesHomeContainer)
