import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as profileActions } from '../../../../redux/profile'

import ReferFriend from './ReferFriend'

class ReferFriendContainer extends Component {
	componentDidMount = () => {
		const { actions } = this.props
		actions.getReferLinkRequest()
	}

	render() {
		const { navigation, referLink } = this.props
		return <ReferFriend navigation={navigation} referLink={referLink} />
	}
}

const mapStateToProps = state => ({
	referLink: state.profile.referLink,
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
)(ReferFriendContainer)
