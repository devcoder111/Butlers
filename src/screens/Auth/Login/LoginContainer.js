import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as loginActions } from '../../../redux/auth'

import LoginView from './LoginView'

class LoginContainer extends PureComponent {
	forwardTo = (path, param) => {
		const { navigation } = this.props
		navigation.navigate(path, { param })
	}

	render() {
		const { navigation } = this.props
		return <LoginView navigation={navigation} forwardTo={this.forwardTo} />
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...loginActions,
		},
		dispatch,
	),
})
export default connect(
	null,
	mapDispatchToProps,
)(LoginContainer)
