import React from 'react'
import { TextInput } from 'react-native'

import styles from './styles'
import { colors } from '../../../../../../../styles'

const StoreInput = ({ onChangeInput }) => {
	const onChangeInputFixed = value => {
		onChangeInput({ value })
	}

	return (
		<TextInput
			style={styles.input}
			onChangeText={onChangeInputFixed}
			placeholder="Search for stores"
			placeholderTextColor={colors.gray}
		/>
	)
}
export default StoreInput
