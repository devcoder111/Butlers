import React from 'react'
import {
	Text,
	View,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	Platform,
} from 'react-native'
import Translate from '@app/translations'
import BottomButton from '../../../../../components/BottomButton/BottomButton'
import DiscoverStore from '../../../../../components/DiscoverStore/DiscoverStore'
import {
	ForwardButton,
	Title,
	Label,
	Input,
} from '../../../../../components/Registration/components'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import * as Animatable from "react-native-animatable";

import styles from './styles'
import { Header } from 'react-native/Libraries/NewAppScreen'

const NeighborhoodView = ({ onClear, value, onChange, _checkCode, forwardTo, authenticated, navigation, code}) => {

	return (
		<KeyboardAvoidingView
			automaticallyAdjustContentInsets={false}
			behavior={Platform.OS === 'ios' ? 'padding' : null}
			style={{ flex: 1 }}
		>
			{authenticated ? navigation.navigate('App') : null}
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<NavigationHeader navigation={navigation} />
					<Title color="#525255">
						<Translate value="INTRO_neighbourhood_heading" />
					</Title>
					<View style={styles.titleView}>
						<Text style={styles.titleColor}>
							<Translate value="INTRO_neighbourhood_area" />
						</Text>
					</View>

					<SmoothPinCodeInput
						style={{alignSelf: 'center'}}
						codeLength={4}
						cellSize={55}
						cellStyle={{
							borderBottomWidth: .9,
							borderColor: '#ddd',
							marginTop: 50,
						}}
						cellSpacing={20}
						cellStyleFocused={{
							borderColor: 'black',
						}}
						textStyle={{
							fontSize: 42,
							color: '#525255',
							fontFamily: 'CircularStd-Bold'
						}}
						onClear={onClear}
						value={value}
						type="num"
						onTextChange={onChange}
						textContentType="oneTimeCode"
					/>

					<View style={{
						width: "100%",
						marginTop: 150,
						justifyContent: 'center',
					}}>
						<BottomButton onPress={() => value.length == 4 && isFinite(value) && navigation.navigate('DeliverNow')}
						shadow= {value.length == 4 ? true : false}
						border= {value.length == 4 ? '#2ED573' : '#D8D8D8'}
						background= {value.length == 4 ? '#2ED573' : '#D8D8D8'}>CHECK AVAILABILITY</BottomButton>
						<DiscoverStore />
					</View>

					{/* <View style={styles.forwardView}>
						<ForwardButton forwardTo={forwardTo} />
					</View> */}
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default NeighborhoodView
