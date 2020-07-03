import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import Icon from '../../../assets'

import styles from './styles'

const EmailVerificatedModal = ({ onClose }) => {
	return (
		<View style={styles.container} onLayout={() => Vibration.vibrate(200, true)}>
			<View style={styles.modalWrap}>
				<Text style={{fontSize:28, lineHeight:36,color:'#525255',marginBottom:10}}>
					Done!
				</Text>
				<Text style={{color: '#67686C',fontWeight: '400',ontSize: 14,}} >
					<Translate value="SIGNUP_mail_verificated" />
				</Text>
				<TouchableOpacity onPress={onClose} style={{marginTop: 20}}>
					<View style={styles.closeButton}>
						<Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>CLOSE</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default EmailVerificatedModal
