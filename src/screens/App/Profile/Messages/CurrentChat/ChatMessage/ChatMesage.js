import React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'

import FullScreenImage from '../../../../../../components/FullScreenImage/FullScreenImage'

const ChatMessage = ({
	speaker,
	text,
	isClient,
	img,
	setModalVisible,
	id,
	fileLink,
	zoomImage,
}) => {
	return (
		<View style={isClient === 'incoming' ? styles.rightWrap : styles.leftWrap}>
			{isClient === 'incoming' ? (
				<View style={styles.rowString}>
					<Text style={{ paddingHorizontal: 10 }}>{speaker}</Text>
					<View style={styles.clientAvatar}>
						<Image style={{ width: 20, height: 20 }} source={img} />
					</View>
				</View>
			) : (
				<View style={styles.rowString}>
					<Image
						style={{ width: 20, height: 20, borderRadius: 10 }}
						source={require('../../../../../../assets/logos/butlers.png')}
					/>
					<Text style={{ paddingHorizontal: 10 }}>Butlers</Text>
				</View>
			)}
			{fileLink ? (
				<TouchableWithoutFeedback onPress={() => zoomImage(fileLink)}>
					<Image source={{ uri: fileLink }} style={{ height: 250, width: 125 }} />
				</TouchableWithoutFeedback>
			) : null}
			<View style={isClient === 'incoming' ? null : styles.fromStart}>
				<TouchableOpacity
					onPress={() => {
						// setModalVisible(id)
					}}
				>
					<View style={isClient === 'incoming' ? styles.clientMessage : styles.message}>
						<Text>{text}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default ChatMessage
