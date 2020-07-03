/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import ImagePicker from 'react-native-image-picker'

import { bindActionCreators } from 'redux'
import { getTailoringArray } from '../../../../../selectors/tailoring'
import { getBasketArray } from '../../../../../selectors/basket'
import { placeholdersHandler } from '../../../../../constants/translations/index'

import { actions as basketActions } from '../../../../../redux/basket'

import { actions as tailoringActions } from '../../../../../redux/tailoring'

import TailoringFilesView from './TailoringFilesView'

class TailoringFilesContainer extends Component {
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
			imageSource: [],
		}
	}

	addPhoto = () => {
		ImagePicker.showImagePicker(this.options, response => {
			if (response.didCancel) {
				console.log('User cancelled image picker')
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error)
			} else {
				this.setState(state => {
					const imageSource = [
						...state.imageSource,
						{
							uri: `data:image/jpeg;base64,${response.data}`,
							name: response.fileName,
							photoUri: response.uri,
						},
					]
					return {
						imageSource,
					}
				})
			}
		})
	}

	navigate = () => {
		const { actions, tailoring, navigation } = this.props
		tailoring.forEach(item => actions.addItemRequest(item))
		actions.cleanTailoringRequest()
		navigation.navigate('TailoringAds')
	}

	static navigationOptions = {
		header: null,
	}

	render() {
		const { navigation, basket } = this.props
		const { imageSource } = this.state
		return (
			<TailoringFilesView
				navigation={navigation}
				navigate={this.navigate}
				basket={basket}
				addMarker={this.addMarker}
				addPhoto={this.addPhoto}
				imageSource={imageSource}
			/>
		)
	}
}

const mapStateToProps = state => ({
	basket: getBasketArray(state),
	tailoring: state.tailoring.tailoringItems,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...basketActions,
			...tailoringActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(TailoringFilesContainer)
