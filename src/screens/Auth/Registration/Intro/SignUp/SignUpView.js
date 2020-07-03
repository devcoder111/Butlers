import React from 'react'
import { View, SafeAreaView, Text, Dimensions } from 'react-native'
import { Input } from '../../../../../components/Registration/components'
import SignInButton from '../../../../../components/SignInButton/SignInButton'
import BottomButton from '../../../../../components/BottomButton/BottomButton'

import styles from './styles'

const screenWidth = Math.round(Dimensions.get('window').width);

const SignUpView = ({ forwardTo }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.headerArea}>
					<Text style={styles.headerText}>Login</Text>
				</View>
				<View style={styles.socialsList}>
					<View style={styles.loginArea}>
						<Text style={styles.hello}>Hello</Text>
						<Text style={styles.loginText}>Login to your account to continue</Text>
						<Input style={styles.username}
							color="#000"
							placeholder='Username'
							placeholderStyle={styles.placeholder}
						/>
						<Input style={styles.password}
							color="#000"
							placeholder='Password'
							placeholderStyle={styles.placeholder}
						/>

						
						<BottomButton onPress={() => forwardTo('LoginEmail', 'Email')} 
						shadow={true}
						border= '#2ED573'
						background= '#2ED573'>
							LOGIN
						</BottomButton>
						<View style={styles.bottomText}>
							<Text style={styles.donot}>Don't have password?</Text>
							<View style={styles.createhere}>
								<Text style={styles.signupLink} onPress={() => forwardTo('Neighborhood', 'viaPhone')}>Create</Text>
								<Text> from here</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default SignUpView
