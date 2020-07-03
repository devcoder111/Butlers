import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import Translate from '@app/translations'
import { Title } from '../../../../components/Registration/components'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'

import Icon from '../../../../assets'
import styles from './styles'

const PasswordRecoveryView = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<NavigationHeader
					navigation={navigation}
					icon="close"
					onPress={() => navigation.navigate('CreatePassword')}
				/>
				<Title>
					<Translate value="LOGIN_recoveryLinkHeading" />
				</Title>
				<Text style={styles.text}>
					<Translate value="LOGIN_recoveryLinkText" />
				</Text>
				<View style={styles.illustration}>{Icon('Illustration10')}</View>
			</View>
		</SafeAreaView>
	)
}

export default PasswordRecoveryView
