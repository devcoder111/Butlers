import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, SafeAreaView, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Translate from '@app/translations'
import ForwardButton from '../../../../../components/Registration/components/ForwardButton/ForwardButton'

import { colors } from '../../../../../styles'

import styles from './styles'

class TailoringFilesView extends Component {
	render() {
		const { navigation, addPhoto, imageSource, navigate } = this.props
		return (
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.bar}>
					<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
						<Icon color={colors.black} name="arrow-left" size={25} />
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => navigation.navigate('Main')}>
						<EvilIcon color={colors.black} name="close" size={40} />
					</TouchableWithoutFeedback>
				</View>
				<Text style={styles.title}>
					<Translate value="TAILORING_uploadPicture_heading" />
				</Text>
				<Text style={styles.text}>
					<Translate value="TAILORING_uploadPicture_text" />
				</Text>
				<View style={styles.photoRow}>
					<TouchableWithoutFeedback onPress={addPhoto}>
						<View style={styles.buttonWrap}>
							<View style={styles.buttonIcon}>
								<Text style={styles.icon}>+</Text>
							</View>
							<Text style={styles.buttonText}>
								<Translate value="TAILORING_uploadPicture_buttonLabel" />
							</Text>
						</View>
					</TouchableWithoutFeedback>
					<FlatList
						showsHorizontalScrollIndicator={false}
						horizontal
						data={imageSource}
						renderItem={item => (
							<TouchableWithoutFeedback>
								<View style={styles.buttonWrap}>
									<View style={styles.buttonIcon}>
										<Image source={{ uri: item.item.uri }} style={styles.image} />
									</View>
									<Text style={styles.buttonText}>{item.item.name}</Text>
								</View>
							</TouchableWithoutFeedback>
						)}
						keyExtractor={item => item}
					/>
				</View>
				<View style={styles.forwardView}>
					<ForwardButton forwardTo={navigate} value={1} />
				</View>
			</SafeAreaView>
		)
	}
}

export default TailoringFilesView
