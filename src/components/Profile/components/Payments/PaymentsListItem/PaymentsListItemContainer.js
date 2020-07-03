import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import PaymentsListItem from './PaymentsListItem'

import { actions as profileActions } from '../../../../../redux/profile'

class PaymentsListItemContainer extends Component {
	componentDidMount() {}

	getCardById = () => {
		const {
			data: { navigateTo = 'DebitCard', id },
			navigation,
			actions,
		} = this.props
		actions.getCardRequest(id)
		navigation.navigate(navigateTo)
	}

	render() {
		const { data, navigation, card } = this.props
		return (
			<PaymentsListItem
				data={data}
				navigation={navigation}
				card={card}
				getCardById={this.getCardById}
			/>
		)
	}
}

const mapStateToProps = state => ({
	card: state.profile.card,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsListItemContainer)
