import React from 'react'
import { View, SafeAreaView } from 'react-native'

import { SignUpMethodItem, Title } from '../../../components/Registration/components'
import NavigationHeader from '../../../components/Profile/components/NavigationHeader'
import Icon from '../../../assets'
import styles from './styles'

import ConfirmationButton from '../../../components/ConfirmationButton/ConfirmationButton'

const LoginView = ({ navigation, forwardTo }) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View>
					<NavigationHeader navigation={navigation} />
					<Title color="#000">Login</Title>
					<View style={styles.socialsList}>
						<SignUpMethodItem name="phone" onPress={() => forwardTo('LoginEmail', 'Phone')}>
							phone
						</SignUpMethodItem>
						{/* <SignUpMethodItem name="facebook" onPress={() => forwardTo('LoginEmail', 'Email')}>
							facebook
						</SignUpMethodItem> */}
						<SignUpMethodItem name="email" onPress={() => forwardTo('LoginEmail', 'Email')}>
							email
						</SignUpMethodItem>
					</View>
					<View style={styles.illustration}>{Icon('Illustration2')}</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default LoginView
