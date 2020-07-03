import React from 'react'

import { View, Text, StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../../../styles'

import { ForwardButton } from '../../../../../components/Registration/components'

import AnimatedClock from '../../../../../components/AnimatedClock'

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginTop: 40,

		backgroundColor: `rgba(0,0,0, 0.5)`,
	},
	modal: {
		width: '90%',
		height: 300,
		padding: 40,

		alignItems: 'center',
		justifyContent: 'space-around',
		textAlign: 'center',

		backgroundColor: colors.white,
		borderRadius: 10,
	},
	modalInfo: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	text: {
		fontSize: 16,
		textAlign: 'center',
	},
	spinnerWrap: {
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	loaderContainerWithPadding: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		width: deviceWidth,
	},
})

const PromocodeModal = ({ forwardTo, value, checkPromocode, currentOrder }) => {
	const roundNum = (x, n) => {
		if (isNaN(x) || isNaN(n)) return false
		const result = (+x).toFixed(n).replace('.', ',')
		const out = result
			.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
			.split(' ')
			.join('.')
		return out
	}
	return (
		<View style={styles.container}>
			<View style={styles.modal}>
				<View>
					{checkPromocode ? (
						<View>
							<Text style={styles.modalInfo}>Great!</Text>
							{roundNum(currentOrder.discount_amount, 2) ? (
								<View style={[{ marginVertical: 15 }]}>
									<Text style={styles.text}>
										Your discount: {roundNum(currentOrder.discount_amount, 2)} DKK
									</Text>
								</View>
							) : (
								<View style={styles.loaderContainerWithPadding}>
									<View style={styles.spinnerWrap}>
										<AnimatedClock color={colors.green} />
									</View>
								</View>
							)}
						</View>
					) : (
						<View>
							<Text style={[styles.modalInfo, { color: 'red' }]}>Retry</Text>
							<View style={[{ marginVertical: 15 }]}>
								<Text style={styles.text}>Can't find your promocode</Text>
							</View>
						</View>
					)}
				</View>
				<View style={styles.forwardView}>
					<ForwardButton
						colorText={colors.white}
						backgroundColorText={colors.green}
						value={value}
						forwardTo={forwardTo}
					/>
				</View>
			</View>
		</View>
	)
}

export default PromocodeModal
