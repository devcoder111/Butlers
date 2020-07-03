import React from 'react'
import { Text, View, TouchableOpacity, Vibration } from 'react-native'

import Translate from '@app/translations'
import Icon from '../../assets'
import styles from './styles'

const EmailVerificationModalView = ({ onClose }) => {
	return (
		<View style={styles.container} onLayout={() => Vibration.vibrate(200, true)}>
			<View style={styles.modalWrap}>
				<Text style={styles.header}>
					<Translate value="SIGNUP_mail_verifyModalHeading" />
				</Text>
				<Text style={styles.text}>
					<Translate value="SIGNUP_mail_verifyModalText" />
				</Text>
				<TouchableOpacity onPress={onClose}>
					<View style={styles.closeButton}>
						<Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>CLOSE</Text>
					</View>
				</TouchableOpacity>
				<Text style={styles.footerTextTop}>
					<Translate value="SIGNUP_mail_verifyModalFooterTextTop" />
				</Text>
				<View style={{flexDirection: 'row'}}>
					<Text style={styles.footerTextLink}>
						<Translate value="SIGNUP_mail_verifyModalFooterTextLink" />
					</Text>
					<Text style={styles.footerTextBottom}>
						<Translate value="SIGNUP_mail_verifyModalFooterTextBottom" />
					</Text>
				</View>
			</View>
		</View>
	)
}

export default EmailVerificationModalView
