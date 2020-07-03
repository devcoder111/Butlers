import React from 'react'
import {
	View,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native'
import Translate from '@app/translations'
import {
	ForwardButton,
	Title,
	Label,
	Input,
} from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'

import styles from './styles'

const Address = ({
	navigation,
	onClear,
	onChange,
	address,
	houseNumber,
	floor,
	floorNumber,
	postalNumber,
	forwardTo,
}) => {
	return (
		<KeyboardAvoidingView
			automaticallyAdjustContentInsets={false}
			behavior={Platform.OS === 'ios' ? 'padding' : null}
			style={{ flex: 1 }}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<NavigationHeader navigation={navigation} />
					<Title color="#000">
						<Translate value="SIGNUP_mail_adressHeading" />
					</Title>
					<View style={styles.labelView}>
						<Label>
							<Translate value="AdressLabel" />
						</Label>
					</View>
					<View style={styles.inputView}>
						<Input
							onClear={onClear('address')}
							value={address}
							onChangeText={onChange('address')}
						/>
					</View>
					<View style={styles.midLane}>
						<View style={styles.houseNumber}>
							<View style={styles.labelView}>
								<Label>
									<Translate value="SIGNUP_mail_adressHouseLabel" />
								</Label>
							</View>
							<View style={styles.inputView}>
								<Input
									onClear={onClear('houseNumber')}
									value={houseNumber}
									onChangeText={onChange('houseNumber')}
									type="num"
								/>
							</View>
						</View>
						<View style={styles.floor}>
							<View style={styles.labelView}>
								<Label>
									<Translate value="SIGNUP_mail_adressFloorLabel" />
								</Label>
							</View>
							<View style={styles.inputView}>
								<Input
									onClear={onClear('floor')}
									value={floor}
									onChangeText={onChange('floor')}
									type="num"
								/>
							</View>
						</View>
						<View style={styles.floor}>
							<View style={styles.labelView}>
								<Label>
									<Translate value="SIGNUP_mail_adressFloorLabel" /> №
								</Label>
							</View>
							<View style={styles.inputView}>
								<Input
									onClear={onClear('floorNumber')}
									value={floorNumber}
									onChangeText={onChange('floorNumber')}
									type="num"
								/>
							</View>
						</View>
					</View>
					<View style={styles.labelView}>
						<Label>
							<Translate value="SIGNUP_mail_adressPostalLabel" />
						</Label>
					</View>
					<View style={styles.inputView}>
						<Input
							onClear={onClear('postalNumber')}
							value={postalNumber}
							onChangeText={onChange('postalNumber')}
							type="num"
						/>
					</View>
					<View style={styles.forwardView}>
						<ForwardButton value={address && houseNumber && postalNumber} forwardTo={forwardTo} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default Address
