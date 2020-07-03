import React from 'react'
import { SafeAreaView } from 'react-native'
import CustomStatusBar from '../../components/CustomStatusBar'

import { colors } from '../../styles'

const AuthLayoutHOC = Screen => props => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.green }}>
			<CustomStatusBar />
			<Screen {...props} />
		</SafeAreaView>
	)
}

export default AuthLayoutHOC
