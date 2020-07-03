import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as profileActions } from '../../../../../redux/profile'

import ReferralBonuses from './ReferralBonuses'

class ReferralBonusesContainer extends Component {
	componentDidMount = () => {
		const { actions } = this.props
		actions.getBonusesRequest()
	}

	render() {
		const { navigation, referLink, bonuses, bonusesLoading } = this.props
		return (
			<ReferralBonuses
				navigation={navigation}
				referLink={referLink}
				bonuses={bonuses}
				bonusesLoading={bonusesLoading}
			/>
		)
	}
}

const mapStateToProps = state => ({
	referLink: state.profile.referLink,
	bonuses: state.profile.bonuses,
	bonusesLoading: state.profile.getBonusesLoading,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
		},
		dispatch,
	),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ReferralBonusesContainer)
