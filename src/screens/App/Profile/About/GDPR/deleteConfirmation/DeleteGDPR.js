import React from 'react'
import { SafeAreaView, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Title from '../../../../../../components/Registration/components/Title/Title'
import NavigationHeader from '../../../../../../components/Profile/components/NavigationHeader'
import { ForwardButton, Input, Label } from '../../../../../../components/Registration/components'

import styles from './styles'

const DeleteGDPR = ({
	navigation,
	onClear,
	value,
	onChange,
	onLogOut,
	deleteGdprResponse,
	deleteGdprLoading,
	onNavigate,
}) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss()
			}}
		>
			<SafeAreaView style={styles.safeContainer}>
				{deleteGdprResponse && deleteGdprResponse !== 'invalid confirm code' ? onLogOut() : null}
				<View style={styles.container}>
					<NavigationHeader navigation={navigation} onAction={() => {}} />
					<View style={styles.scrollContainer}>
						<Title color="#1E272E">GDPR Deletion</Title>
						<Text style={styles.text}>We have sent you the email with your confirmation code.</Text>
						<Text style={styles.text}>
							Please, enter code to delete all your personal data and log out.
						</Text>
						<Text
							style={[
								styles.invalid,
								{ opacity: deleteGdprResponse === 'invalid confirm code' ? 1 : 0 },
							]}
						>
							Invalid code
						</Text>
						<View style={styles.labelView}>
							<Label>Confirmation code</Label>
						</View>
						<View style={styles.inputView}>
							<Input onClear={onClear} value={value} type="num" onChangeText={onChange} />
						</View>
						<Text style={[styles.warning, { opacity: deleteGdprLoading ? 1 : 0 }]}>
							Your personal information will be deleted now. Please, wait the proccess to be
							finished.
						</Text>
					</View>
				</View>
				<View style={styles.forwardView}>
					<ForwardButton value={value} forwardTo={onNavigate} />
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	)
}

export default DeleteGDPR
