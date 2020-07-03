import React from 'react'
import { Text, SafeAreaView, View, Image } from 'react-native'
import Translate from '@app/translations'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader/NavigationHeader'
import BottomButton from '../../../../../components/BottomButton/BottomButton'
import * as Animatable from "react-native-animatable";
import styles from './styles'

const DeliverNowView = ({ navigation, forwardTo, user }) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<NavigationHeader navigation={navigation} />
				<Animatable.View style={styles.card} animation="bounceInDown" iterationCount={1} easing="ease-out"  direction="down">
					<View style={styles.illustration}>
						<Image source={require('../../../../../assets/Welcome.png')} resizeMode="cover" />
					</View>
				</Animatable.View>
				<View >
					<Text style={styles.welcomeText}>
						<Translate value="SIGNUP_mail_weCanDeliver" />
					</Text>
				</View>
				<Text style={styles.text}>
					<Translate value="SIGNUP_mail_continueRegistration" />
				</Text>
				<View>
					<BottomButton onPress={forwardTo}
						border='#2ED573'
						background='#2ED573'
						arrow='true'
						shadow='true'
					>
						<Text>
							CONTINUE
						</Text>
					</BottomButton>
				</View>
			</View>
		</SafeAreaView >
	)
}

export default DeliverNowView
