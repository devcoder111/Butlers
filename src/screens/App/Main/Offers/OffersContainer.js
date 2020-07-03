/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import OffersHome from './OffersHome'

class OffersHomeContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visibleModal: true,
		}
	}

	onClose = () => {
		this.setState({ visibleModal: false })
	}

	render() {
		const { navigation, user } = this.props
		const { visibleModal } = this.state
		return (
			<OffersHome
				navigation={navigation}
				user={user}
				visibleModal={visibleModal}
				onClose={this.onClose}
			/>
		)
	}
}
const mapStateToProps = state => ({
	user: state.auth.user,
})

export default connect(
	mapStateToProps,
	null,
)(OffersHomeContainer)
