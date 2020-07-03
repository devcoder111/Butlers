import React from 'react'
import { SafeAreaView } from 'react-native'
import CustomStatusBar from '../../components/CustomStatusBar'
import { colors } from '../../styles'

const MainLayoutHOC = Screen => props => {
	return (
		<>
			<SafeAreaView style={{ flex: 0, backgroundColor: colors.green }} />
			<SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
				<CustomStatusBar />
				<Screen {...props} />
			</SafeAreaView>
		</>
	)
}

export default MainLayoutHOC
