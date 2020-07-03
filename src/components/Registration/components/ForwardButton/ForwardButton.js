import React from 'react'
import { TouchableOpacity } from 'react-native'

import Icon from '../../../../assets'

const ForwardButton = ({ value, forwardTo }) => (
	<TouchableOpacity
		disabled={!value}
		onPress={() => {
			if (value) forwardTo()
		}}
	>
		{Icon(value ? 'forwardActive' : 'forwardInactive')}
	</TouchableOpacity>
)

export default ForwardButton
