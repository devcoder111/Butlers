import React from 'react'
import { TextInput } from 'react-native'

import styles from './styles'

import { placeholdersHandler } from '../../../../../../constants/translations/index'

import { colors } from '../../../../../../styles'

const StoreInput = ({ onChangeInput, user }) => {
	const onChange = value => {
		onChangeInput({ value })
	}

	return (
		<TextInput
			style={styles.input}
			onChangeText={onChange}
			placeholder={placeholdersHandler(user, 'PROFILE_storeLocations_storeSearchPlaceholder')}
			placeholderTextColor={colors.gray}
		/>
	)
}
export default StoreInput
