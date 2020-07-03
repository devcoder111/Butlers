/* eslint-disable camelcase */
import React from 'react'
import { SafeAreaView, View, Modal, Text, Animated } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import Translate from '@app/translations'
import {
	Title,
	Input,
	Label,
	NavigationLink,
} from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'

import Icon from '../../../../../assets/index'

import { colors } from '../../../../../styles'

import styles from './styles'

import DeleteCardModalView from '../../../../../components/DeleteCardModal/DeleteCardModalView'

const DebitCardView = ({
	navigation,
	data: { primary, last_4, exp_month, exp_year, brand },
	deleteCard,
	onDeleteCard,
	onModalClose,
	visibleModal,
	setPrimaryCard,
	setAsPrimaryResponse,
}) => {
	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={deleteCard}>
					<Translate value="PROFILE_cardDetails_deleteCard" />
				</NavigationHeader>
				<Title color={colors.black}>
					<Translate value="PROFILE_cardDetails_heading" />
				</Title>
				<Animated.View style={{ opacity: setAsPrimaryResponse === 'success' ? 1 : 0 }}>
					<View>
						<Text style={{ color: colors.green }}><Translate value="PROFILE_cardDetails_primaryCard" /></Text>
					</View>
				</Animated.View>
				<View style={styles.card}>{Icon(brand)}</View>
				<View style={styles.labelView}>
					<Label color={colors.black}>
						<Translate value="PROFILE_cardDetails_cardNumberLabel" />
					</Label>
				</View>
				<View style={styles.inputView}>
					<Input
						editable={false}
						color={colors.black}
						selectionColor={colors.black}
						value={`*${last_4 || ' '}`}
					/>
				</View>
				<View style={styles.labelView}>
					<Label color={colors.black}>
						<Translate value="PROFILE_cardDetails_expireDateLabel" />
					</Label>
				</View>
				<View style={styles.inputView}>
					<Input
						editable={false}
						color={colors.black}
						selectionColor={colors.black}
						value={`${exp_month}/${exp_year ? exp_year.slice(2, 5) : exp_year}`}
					/>
				</View>
				<View style={styles.link}>
					<NavigationLink color={colors.black} linkTo={setPrimaryCard}>
						{primary ? (
							<Translate value="PROFILE_cardDetails_removePrimaryLink" />
						) : (
							<Translate value="PROFILE_cardDetails_setAsPrimaryLink" />
						)}
					</NavigationLink>
				</View>
				<Modal animationType="slide" transparent visible={visibleModal}>
					<DeleteCardModalView
						onClose={onModalClose}
						navigation={navigation}
						onDeleteCard={onDeleteCard}
					/>
				</Modal>
			</SafeAreaView>
		</ScrollView>
	)
}

export default DebitCardView
