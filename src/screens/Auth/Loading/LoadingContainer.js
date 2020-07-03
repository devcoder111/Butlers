import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as authActions } from '../../../redux/auth'

import LoadingView from './LoadingView'

class LoadingContainer extends React.Component {
	componentDidMount() {
		this.bootstrapAsync()
	}

	bootstrapAsync = () => {
		const { actions } = this.props
		actions.isAuthenticatedRequest()
	}

	render() {
		const { navigation, authenticated, loading } = this.props
		return <LoadingView navigation={navigation} authenticated={authenticated} loading={loading} />
	}
}

const mapStateToProps = state => ({
	loading: state.auth.isAuthenticatedLoading,
	authenticated: state.auth.authenticated,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...authActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(LoadingContainer)
