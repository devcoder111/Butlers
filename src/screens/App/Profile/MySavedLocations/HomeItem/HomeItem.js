import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import ModalSelector from 'react-native-modal-selector'

import { placeholdersHandler } from '../../../../../constants/translations/index'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import styles from './styles'

const HomeItem = ({ item, onModalChange, onChooseLocation, user }) => {
	const data = [
		{ key: 31231, label: placeholdersHandler(user, 'Edit') },
		{ key: 222, label: placeholdersHandler(user, 'PROFILE_deleteLocationButton') },
	]
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				onChooseLocation(item.id)
			}}
		>
			<View style={[styles.container, styles.borderTop]}>
				<View style={styles.nameView}>
					<View style={styles.iconView}>
						<SimpleLineIcons name="home" size={25} />
					</View>
					<Text style={styles.nameText}>{item.address}</Text>
				</View>
				<ModalSelector
					data={data}
					overlayStyle={{
						justifyContent: 'flex-end',
						paddingHorizontal: '3%',
						paddingBottom: '2%',
					}}
					cancelText="Cancel"
					cancelStyle={{
						padding: 12,
						backgroundColor: 'rgb(255,255,255)',
						opacity: 0.9,
						borderRadius: 10,
					}}
					onChange={onModalChange(item)}
				>
					<View style={styles.image}>
						<EntypoIcons name="dots-three-horizontal" size={20} />
					</View>
				</ModalSelector>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default HomeItem
