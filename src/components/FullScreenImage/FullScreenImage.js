import React from 'react'
import { View, SafeAreaView, Image, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/EvilIcons'
import styles from './styles'

const FullScreenImage = ({ currentZoomedImageUri, toggleZoomedImage }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrap} collapsable>
				<TouchableOpacity onPress={toggleZoomedImage} style={styles.cross}>
					<View>
						<Icon color="#fff" name="close" size={30} />
					</View>
				</TouchableOpacity>
				<Image source={{ uri: currentZoomedImageUri }} style={styles.image} />
			</View>
		</SafeAreaView>
	)
}

export default FullScreenImage
