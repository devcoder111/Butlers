/* eslint-disable camelcase */
import React from 'react'
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native'

import Translate from '@app/translations'
import { Dropdown } from 'react-native-material-dropdown'
import {
	ForwardButton,
	Title,
	NavigationLink,
	Input,
} from '../../../../components/Registration/components'
import NavigationHeader from '../../../../components/Registration/components/NavigationHeader'
import BasketList from '../../../../components/Cleaning/BasketList'
import PromocodeModal from './PromocodeModal'
import { placeholdersHandler } from '../../../../constants/translations/index'

import { colors } from '../../../../styles'

import styles from './styles'

const BasketView = ({
	navigation,
	basket,
	total,
	promoCode,
	comment,
	onChange,
	onClear,
	addItem,
	deleteItem,
	forwardTo,
	setModalVisible,
	modalVisible,
	onApplyPromoCode,
	applyPromoCodeResponse,
	bonusesNames,
	onChangeDropdown,
	bonus_id,
	currentOrder,
	user,
}) => {
	const roundNum = (x, n) => {
		if (isNaN(x) || isNaN(n)) return false
		const result = (+x).toFixed(n).replace('.', ',')
		const out = result
			.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
			.split(' ')
			.join('.')
		return out
	}
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<NavigationHeader
					headerName={<Translate value="BASKET_headerText" />}
					navigation={navigation}
					onAction={() => {}}
				/>
				<View style={styles.container}>
					<ScrollView style={{ marginTop: 20 }}>
						<Title color={colors.black}>
							<Translate value="BASKET_heading" />
						</Title>
						<BasketList
							addItem={addItem}
							deleteItem={deleteItem}
							basket={basket}
							roundNum={roundNum}
						/>
						<View style={{ paddingVertical: 20 }}>
							<NavigationLink
								linkTo={() => {
									navigation.navigate('Main')
								}}
								align="left"
								color={colors.green}
							>
								<Translate value="BASKET_forgot" />
							</NavigationLink>
						</View>
						<View style={[styles.inputView, styles.inputTopView]}>
							<Input
								color={colors.black}
								placeholder={placeholdersHandler(user, 'BASKET_commentsPlaceholder')}
								onClear={onClear('comment')}
								value={comment}
								onChangeText={onChange('comment')}
							/>
						</View>
						{bonus_id ? null : (
							<View
								style={[
									styles.inputView,
									{ flexDirection: 'row', justifyContent: 'space-between' },
								]}
							>
								<View style={[{ width: 240 }]}>
									<Input
										color={colors.black}
										placeholder={placeholdersHandler(user, 'BASKET_promocodePlaceholder')}
										onClear={onClear('promoCode')}
										value={promoCode}
										onChangeText={onChange('promoCode')}
									/>
								</View>
								{promoCode ? (
									<TouchableOpacity
										onPress={() => {
											onApplyPromoCode(promoCode)
											setModalVisible()
										}}
									>
										<Text style={styles.applyButton}>Apply</Text>
									</TouchableOpacity>
								) : null}
							</View>
						)}

						{promoCode ? null : (
							<View style={{ marginTop: -20 }}>
								<Dropdown
									value={placeholdersHandler(user, 'BASKET_discount')}
									fontSize={20}
									textColor={colors.gray}
									baseColor="black"
									data={bonusesNames}
									onChangeText={value => {
										onChangeDropdown(value)
									}}
									// disabled={true}
								/>
							</View>
						)}
						<View style={styles.totalView}>
							<Text style={styles.totalText}><Translate value="BASKET_discountAmount" /></Text>
							<Text style={styles.totalText}>{roundNum(currentOrder.discount_amount, 2)} DKK</Text>
						</View>
						<View style={styles.totalView}>
							<Text style={styles.totalText}><Translate value="BASKET_totalAmount" /></Text>
							<Text style={styles.totalText}>{roundNum(currentOrder.price, 2)} DKK</Text>
						</View>
					</ScrollView>
					<View style={styles.forwardView}>
						<ForwardButton
							colorText={colors.white}
							backgroundColorText={colors.green}
							value={basket.length !== 0}
							forwardTo={forwardTo}
						/>
					</View>
				</View>
			</SafeAreaView>
			<Modal animationType="slide" transparent visible={modalVisible}>
				<PromocodeModal
					doneIte
					checkPromocode={applyPromoCodeResponse.success}
					forwardTo={setModalVisible}
					value
					currentOrder={currentOrder}
				/>
			</Modal>
		</>
	)
}

export default BasketView
