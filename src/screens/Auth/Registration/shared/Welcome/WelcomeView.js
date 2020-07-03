import React from 'react'
import { Text, SafeAreaView, View, Image } from 'react-native'

import Translate from '@app/translations'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader/NavigationHeader'
import BottomButton from '../../../../../components/BottomButton/BottomButton'
import styles from './styles'
import * as Animatable from "react-native-animatable";

const WelcomeView = ({ navigation, user, forwardTo }) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<NavigationHeader noHeader />
				<Animatable.View style={styles.card} animation="tada" iterationCount="infinite" easing="ease-out" direction="down">
					<View style={styles.illustration}>
						<Image source={require('../../../../../assets/Welcome.png')} resizeMode="cover" />
					</View>
				</Animatable.View>
				<View >
					<Text style={styles.welcomeText}>
						<Translate value="SIGNUP_mail_welcomeHeading" />
						{/* {user.first_name}! */}
					</Text>
				</View>
				<Text style={styles.text}>
					<Translate value="SIGNUP_mail_welcomeText" />
				</Text>
				{/* <View style={styles.forwardView}>
					<ForwardButton value={user} forwardTo={forwardTo} navigation={navigation} />
				</View> */}

				<View>
					<BottomButton onPress={forwardTo}
					shadow= {user ? true : false}
						border={user ? '#2ED573' : '#D8D8D8'}
						background={user ? '#2ED573' : '#D8D8D8'}
						arrow='true'>
						<Text>
							CONTINUE
						</Text>
					</BottomButton>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default WelcomeView
