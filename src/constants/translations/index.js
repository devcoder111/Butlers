/* eslint-disable no-param-reassign */
import { connect } from 'react-redux'
import danish from './da'
import english from './en'

const TranslationsContainer = ({ user, value }) => {
	if (user.locale === 'en') {
		return english[value]
	}
	return danish[value]
}

const mapStateToProps = state => ({
	user: state.auth.user,
})

export function placeholdersHandler(user, value) {
	if (user.locale === 'en') {
		return english[value]
	}
	return danish[value]
}

export default connect(mapStateToProps, null)(TranslationsContainer)
