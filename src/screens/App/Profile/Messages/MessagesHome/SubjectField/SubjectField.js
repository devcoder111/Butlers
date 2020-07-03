import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import styles from './styles'
import { colors } from '../../../../../../styles'

const SubjectField = ({ item, subject, messageNum, navigation }) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				navigation.navigate('CurrentChat', item)
			}}
		>
			<View style={[styles.containerMessages, styles.borderTop]}>
				<View style={styles.nameView}>
					<Text style={styles.nameText}>{subject}</Text>
				</View>
				<View style={styles.image}>
					{messageNum !== '0' ? (
						<View style={[styles.itemsNumber, { backgroundColor: colors.green }]}>
							<Text style={[{ color: colors.white }]}>{messageNum}</Text>
						</View>
					) : null}
					<SimpleLineIcons name="arrow-right" size={20} />
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default SubjectField
