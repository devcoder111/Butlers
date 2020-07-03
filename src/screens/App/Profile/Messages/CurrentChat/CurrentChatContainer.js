/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import ImagePicker from 'react-native-image-picker'
import { getCards } from '../../../../../selectors/cards'

import { actions as profileActions } from '../../../../../redux/profile'
import { actions as chatActions } from '../../../../../redux/chat'

import CurrentChatView from './CurrentChatView'

import { createMessageImageData } from '../../../../../helpers/profile/index'

class CurrentChatContainer extends Component {
	options = {
		title: 'Choose your photo',
		storageOptions: {
			skipBackup: true,
			path: 'images',
		},
	}

	constructor(props) {
		super(props)
		const { navigation, messages } = this.props
		const item = navigation.state.params
		const generalMessages = messages.filter(el => {
			return el.subject === item.subject
		})
		const orderMessages = messages.filter(el => {
			return el.subject == item.order_id
		})
		const currentMessages = item.order_id ? orderMessages : generalMessages
		this.state = {
			clientMessage: '',
			messageConst: '',
			modalVisible: false,
			openedMessage: 0,
			allMess: currentMessages,
			currentZoomedImageUri: '',
			zoomedImageVisible: false,
		}
	}

	componentDidMount() {
		const { actions } = this.props
		actions.getMessagesRequest()
		actions.getSubjectsRequest()
	}

	onClear = name => {
		return () => this.setState({ [name]: '' })
	}

	onChange = name => {
		return text => {
			this.setState({ [name]: text })
			this.setState({ messageConst: text })
		}
	}

	setModalVisible = id => {
		const { modalVisible } = this.state
		this.setState({ openedMessage: id, modalVisible: !modalVisible })
	}

	navigateTo = () => {
		const { navigation } = this.props
		const { order_id } = navigation.state.params
		order_id ? navigation.navigate('Order') : navigation.goBack()
	}

	addClientMessage = text => {
		const { actions, subject, navigation } = this.props
		const { messageConst, allMess } = this.state
		const item = navigation.state.params
		const data = {
			subject: subject || item.subject,
			type: 'general',
			message: text,
		}
		const orderData = {
			order_id: item.order_id,
			subject: `${item.order_id}`,
			type: 'order',
			message: text,
		}
		if (item.order_id) {
			actions.sendMessageRequest(orderData)
		} else actions.sendMessageRequest(data)
		actions.getMessagesRequest()
		actions.getSubjectsRequest()
		const newMess = {
			message: messageConst,
			customer_id: 1,
			id: `${text}fake`,
			inbound_outbound: 'incoming',
		}
		const messView = allMess.slice()
		messView.unshift(newMess)
		this.setState({ clientMessage: '', allMess: messView })
		console.log(this.state.allMess)
	}

	deleteMessage = () => {
		const { openedMessage, allMess } = this.state
		const { actions } = this.props
		const data = {
			id: openedMessage,
		}
		const notDeleted = []
		allMess.forEach(el => {
			if (el.id !== openedMessage) notDeleted.push(el)
		})
		actions.deleteMessageRequest(data)
		actions.getMessagesRequest()
		actions.getSubjectsRequest()
		this.setState({ allMess: notDeleted })
	}

	editMessage = () => {
		console.log('edit')
	}

	attachFile = () => {
		const { actions } = this.props
		ImagePicker.showImagePicker(this.options, response => {
			if (response.didCancel) {
				console.log('User cancelled image picker')
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error)
			} else {
				console.log(createMessageImageData(response))
			}
		})
	}

	zoomImage = fileLink => {
		console.log(fileLink)
		this.setState({ currentZoomedImageUri: fileLink })
	}

	toggleZoomedImage = fileLink => {
		const { zoomedImageVisible } = this.state
		console.log(fileLink)
		this.setState({ zoomedImageVisible: !zoomedImageVisible, currentZoomedImageUri: fileLink })
	}

	render() {
		const { navigation, actions, messages, user } = this.props
		const {
			clientMessage,
			modalVisible,
			allMess,
			currentZoomedImageUri,
			zoomedImageVisible,
		} = this.state
		return (
			<CurrentChatView
				onClear={this.onClear}
				onChange={this.onChange}
				navigateTo={this.navigateTo}
				navigation={navigation}
				clientMessage={clientMessage}
				addClientMessage={this.addClientMessage}
				currentMessages={allMess}
				user={user}
				modalVisible={modalVisible}
				setModalVisible={this.setModalVisible}
				deleteMessage={this.deleteMessage}
				editMessage={this.editMessage}
				attachFile={this.attachFile}
				zoomImage={this.zoomImage}
				currentZoomedImageUri={currentZoomedImageUri}
				toggleZoomedImage={this.toggleZoomedImage}
				zoomedImageVisible={zoomedImageVisible}
			/>
		)
	}
}

const mapStateToProps = state => ({
	cards: getCards(state),
	user: state.auth.user,
	subject: state.profile.subjectChat,
	messages: state.profile.messages,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
			...chatActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChatContainer)
