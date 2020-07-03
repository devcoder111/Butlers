import React from 'react'
import { SafeAreaView } from 'react-native'
import CustomStatusBar from '../../components/CustomStatusBar'

import { colors } from '../../styles'

const WhiteLayoutHOC = Screen => props => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.white, color: '#1E272E' }}>
			<CustomStatusBar color={colors.white} barStyle="dark-content" />
			<Screen {...props} />
		</SafeAreaView>
	)
}

export default WhiteLayoutHOC
