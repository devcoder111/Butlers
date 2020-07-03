import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'

import Translate from '@app/translations'
import Basket from '../../../../../components/Cleaning/BasketButton'

import { colors } from '../../../../../styles'

import styles from './styles'

class TailoringLastView extends Component {
	render() {
		const { navigation } = this.props
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
					<Translate value="TAIOLRING_finish_heading" />
				</Text>
				<Text style={styles.text}>
					<Translate value="TAIOLRING_finish_text" />
				</Text>
				<TouchableWithoutFeedback onPress={() => navigation.navigate('TailoringService')}>
					<View style={styles.addButton}>
						<Icon name="plus" size={40} color="#1E272E" />
						<Text style={styles.buttonText}>
							<Translate value="TailoringAddButton" />
						</Text>
					</View>
				</TouchableWithoutFeedback>
				<Basket navigateTo={() => navigation.navigate('Basket')} />
			</SafeAreaView>
		)
	}
}

export default TailoringLastView
