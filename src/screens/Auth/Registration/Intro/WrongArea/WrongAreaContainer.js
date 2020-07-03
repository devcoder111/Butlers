import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as registrationActions } from '../../../../../redux/registration'

import WrongAreaView from './WrongAreaView'

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...registrationActions,
		},
		dispatch,
	),
})
export default connect(
	null,
	mapDispatchToProps,
)(WrongAreaView)
