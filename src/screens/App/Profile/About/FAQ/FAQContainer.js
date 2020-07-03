import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions as profileActions } from '../../../../../redux/profile'

import FAQ from './FAQ'

class FAQContainer extends Component {
	componentDidMount = () => {
		const { actions } = this.props
		actions.getFaqRequest()
	}

	render() {
		const { navigation, faq } = this.props
		return <FAQ navigation={navigation} faq={faq} />
	}
}

const mapStateToProps = state => ({
	faq: state.profile.faq,
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
)(FAQContainer)
