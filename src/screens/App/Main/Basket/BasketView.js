import React from 'react'
import { SafeAreaView, View, Text, ScrollView } from 'react-native'

import Translate from '@app/translations'
import {
	ForwardButton,
	Title,
	NavigationLink,
	Input,
} from '../../../../components/Registration/components'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'
import BasketList from '../../../../components/Cleaning/BasketList'

import { colors } from '../../../../styles'

import styles from './styles'

import { placeholdersHandler } from '../../../../constants/translations/index'

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
	user,
	currSavedComm,
}) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<ScrollView>
					<Title color={colors.black}>
						<Translate value="BASKET_heading" />
						{console.log(`aft: ${currSavedComm}`)}
					</Title>
					<BasketList addItem={addItem} deleteItem={deleteItem} basket={basket} />
					<View style={{ paddingVertical: 20 }}>
						<NavigationLink align="left" color={colors.green}>
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
					<View style={styles.inputView}>
						<Input
							color={colors.black}
							placeholder={placeholdersHandler(user, 'BASKET_promocodePlaceholder')}
							onClear={onClear('promoCode')}
							value={promoCode}
							onChangeText={onChange('promoCode')}
						/>
					</View>
					<View style={styles.totalView}>
						<Text style={styles.totalText}>
							<Translate value="BASKET_totalAmount" />
						</Text>
						<Text style={styles.totalText}>{total || 0}</Text>
					</View>
				</ScrollView>
				<View style={styles.forwardView}>
					<ForwardButton
						colorText={colors.white}
						backgroundColorText={colors.green}
						value
						forwardTo={forwardTo}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default BasketView
