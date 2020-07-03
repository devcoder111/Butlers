import React from 'react'
import {
	SafeAreaView,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Modal,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Platform,
	ScrollView,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import { Input } from '../../../../../components/Registration/components'
import ChatMessage from './ChatMessage/ChatMesage'
import MessageModal from '../MessageModal'
import { colors } from '../../../../../styles'

import styles from './styles'
import FullScreenImage from '../../../../../components/FullScreenImage/FullScreenImage'

const CurrentChatView = ({
	navigateTo,
	navigation,
	clientMessage,
	onClear,
	onChange,
	addClientMessage,
	currentMessages,
	user,
	modalVisible,
	setModalVisible,
	deleteMessage,
	editMessage,
	attachFile,
	zoomImage,
	currentZoomedImageUri,
	toggleZoomedImage,
	zoomedImageVisible,
}) => {
	const fullName = `${user.first_name} ${user.last_name}`
	return (
		<KeyboardAvoidingView
			automaticallyAdjustContentInsets={false}
			behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
			style={{ flex: 1 }}
		>
			{/* <SafeAreaView style={styles.container}> */}
			<TouchableWithoutFeedback
				onPress={() => {
					Keyboard.dismiss()
				}}
			>
				<>
					<View style={[{ paddingHorizontal: 20 }, styles.container]}>
						<NavigationHeader
							navigation={navigation}
							onAction={() => {}}
							onPress={() => {
								navigateTo()
							}}
						/>
						<View style={styles.scrollwrap}>
							<FlatList
								inverted
								data={currentMessages}
								renderItem={({ item }) => (
									<ChatMessage
										modalVisible={modalVisible}
										speaker={fullName}
										text={item.message}
										isClient={item.inbound_outbound}
										setModalVisible={setModalVisible}
										id={item.id}
										deleteMessage={deleteMessage}
										editMessage={editMessage}
										fileLink={item.file_link}
										zoomImage={toggleZoomedImage}
									/>
								)}
								keyExtractor={item => item.id}
								style={styles.messagesList}
							/>
							<View style={styles.separator} />
						</View>
					</View>
					<View style={[styles.fixedItem, { marginBottom: 1 }]}>
						<View style={[{ width: 250 }]}>
							<Input
								placeholder="Enter your message"
								color={colors.black}
								selectionColor={colors.black}
								onClear={onClear('clientMessage')}
								value={clientMessage}
								onChangeText={onChange('clientMessage')}
								multiline
								maxLength={255}
							/>
						</View>
						<TouchableOpacity style={[styles.addFileButton]} onPress={attachFile}>
							<Icon style={[{ color: colors.gray }]} name="paperclip" size={25} />
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.sendButton]}
							onPress={() => {
								addClientMessage(clientMessage)
							}}
						>
							<SimpleLineIcons style={[{ color: 'white' }]} name="arrow-up" size={25} />
						</TouchableOpacity>
					</View>
					<View />
				</>
			</TouchableWithoutFeedback>
			<Modal animationType="slide" transparent visible={modalVisible}>
				<MessageModal
					deleteMessage={deleteMessage}
					editMessage={editMessage}
					setModalVisible={setModalVisible}
				/>
			</Modal>
			{/* </SafeAreaView> */}

			<Modal animationType="fade" visible={zoomedImageVisible}>
				<FullScreenImage
					currentZoomedImageUri={currentZoomedImageUri}
					toggleZoomedImage={toggleZoomedImage}
				/>
			</Modal>
		</KeyboardAvoidingView>
	)
}

export default CurrentChatView
