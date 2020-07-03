import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ImagePicker from 'react-native-image-picker'
import Translate from '@app/translations'
import { placeholdersHandler } from '../../../../constants/translations/index'
import { actions as loginActions } from '../../../../redux/auth'
import { actions as profileActions } from '../../../../redux/profile'
import ProfileHomeView from './ProfileHomeView'

class ProfileHomeContainer extends Component {
	options = {
		title: placeholdersHandler(this.props.user, 'PROFILE_personalInfo_choosePhoto'),
		storageOptions: {
			skipBackup: true,
			path: 'images',
		},
	}

	constructor(props) {
		super(props)
		this.state = {
			imageSource: {},
		}
	}

	addPhoto = () => {
		const { actions, avatarLoading } = this.props
		ImagePicker.showImagePicker(this.options, response => {
			if (response.didCancel) {
				console.log('User cancelled image picker')
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error)
			} else {
				actions.updateAvatarRequest(response)
				this.setState({
					imageSource: {
						uri: `data:image/jpeg;base64,${response.data}`,
						name: response.fileName,
						photoUri: response.uri,
					},
				})
			}
		})
	}

	onLogOut = () => {
		const { actions } = this.props
		actions.logOutRequest()
	}

	render() {
		const { navigation, authenticated, user, avatarLoading } = this.props
		const { imageSource } = this.state
		return (
			<ProfileHomeView
				navigation={navigation}
				onLogOut={this.onLogOut}
				authenticated={authenticated}
				user={user}
				addPhoto={this.addPhoto}
				avatarLoading={avatarLoading}
				imageSource={imageSource}
			/>
		)
	}
}
const mapStateToProps = state => ({
	authenticated: state.auth.authenticated,
	user: state.auth.user,
	avatarLoading: state.profile.updateAvatarLoading,
})
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...loginActions,
			...profileActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHomeContainer)
