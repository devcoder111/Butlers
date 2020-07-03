import React from 'react'
import { SafeAreaView, Text, View, Modal } from 'react-native'

import Title from '../../../../../components/Registration/components/Title/Title'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'

import SendGDPRModalView from '../../../../../components/SendGDPRModal/SendGDPRModalView'
import DeleteUserDataModalView from '../../../../../components/DeleteUserDataModal/DeleteUserDataModalView'

import Touchable from '../../../../../components/Touchable/Touchable'

import styles from './styles'

const GDPR = ({
	navigation,
	onSendMailModalClose,
	onSendMailClick,
	visibleSendModal,
	onDeleteModalClose,
	onDeleteClick,
	visibleDeleteModal,
	onDeleteClickModal,
	gdprDa,
	gdprEn,
	user,
}) => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<View style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<View style={styles.scrollContainer}>
					<Title color="#1E272E">GDPR</Title>
					{/* <Touchable buttonStyle={styles.button} onPress={() => navigation.navigate('ShowGdpr')}>
						<Text style={styles.buttonText}>Show my GDPR</Text>
					</Touchable> */}
					<Text style={styles.text}>{user.locale === 'en' ? gdprEn : gdprDa}</Text>
					<View style={styles.listWrap}>
						<Touchable buttonStyle={styles.button} onPress={onSendMailClick}>
							<Text style={styles.buttonText}>Send me my personal information</Text>
						</Touchable>
						<Touchable buttonStyle={styles.button} onPress={onDeleteClickModal}>
							<Text style={styles.buttonText}>Delete my data and account</Text>
						</Touchable>
					</View>
				</View>
				<Modal animationType="slide" transparent visible={visibleSendModal}>
					<SendGDPRModalView onClose={onSendMailModalClose} navigation={navigation} />
				</Modal>
				<Modal animationType="slide" transparent visible={visibleDeleteModal}>
					<DeleteUserDataModalView
						onClose={onDeleteModalClose}
						navigation={navigation}
						onDeleteClick={onDeleteClick}
					/>
				</Modal>
			</View>
		</SafeAreaView>
	)
}

export default GDPR
