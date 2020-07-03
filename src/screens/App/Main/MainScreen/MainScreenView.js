/* eslint-disable no-nested-ternary */
import React from 'react'
import { View, Modal } from 'react-native'

import MainTabsHeader from '../../../../components/MainTabsHeader/MainTabsHeader'
import MainTabs from './MainTabs/MainTabs'
import Basket from '../../../../components/Cleaning/BasketButton'
import ServicesList from '../../../../components/ServicesList'
import AnimatedClock from '../../../../components/AnimatedClock/AnimatedClock'
import EmailVerificationModal from '../../../../components/EmailVerificationModal/EmailVerificationModalView'
import EmailVerificatedModal from '../../../../components/EmailVerificationModal/EmailVerificatedModal/EmailVerificatedModal'
import TailoringHome from '../Tailoring/TailoringHomeContainer'

import { colors } from '../../../../styles'
import styles from './styles'

const MainScreenView = ({
	navigation,
	tags,
	user,
	tagsLoading,
	activeCategory,
	getServices,
	setActiveCategory,
	services,
	isServicesLoading,
	forwardTo,
	total,
	visibleModal,
	onClose,
	updateVerifiedEmailModal,
	welcomeMessageEn,
	welcomeMessageDa,
	actionMessageEn,
	actionMessageDa,
}) => {
	return (
		<View style={styles.container}>
			<MainTabsHeader
				user={user}
				navigation={navigation}
				visibleInput={tags[0] ? activeCategory === tags[0].id : true}
				id={activeCategory}
				welcomeMessageEn={welcomeMessageEn}
				welcomeMessageDa={welcomeMessageDa}
				actionMessageEn={actionMessageEn}
				actionMessageDa={actionMessageDa}
			/>
			<MainTabs
				tags={tags}
				tagsLoading={tagsLoading}
				activeCategory={activeCategory}
				getServices={getServices}
				setActiveCategory={setActiveCategory}
			/>
			{activeCategory === 0 ? (
				<TailoringHome navigation={navigation} />
			) : isServicesLoading ? (
				<View style={styles.loaderContainerWithPadding}>
					<View style={styles.spinnerWrap}>
						<AnimatedClock color={colors.green} />
					</View>
				</View>
			) : (
						<View style={{ flex: 1, position: 'relative' }}>
							<ServicesList navigateTo={forwardTo} data={services} />
							<Basket count={total} navigateTo={() => navigation.navigate('Basket')} />
						</View>
					)}

			{!user.email_verified_at ? (

				<Modal animationType="slide" transparent visible={visibleModal}>
					<EmailVerificationModal onClose={onClose} />
				</Modal>

			) : user.email_verified_modal_showed ? null : (

				<Modal animationType="slide" transparent visible={visibleModal}>
					{updateVerifiedEmailModal()}
					<EmailVerificatedModal onClose={onClose} />
				</Modal >

			)}
		</View >
	)
}

export default MainScreenView
