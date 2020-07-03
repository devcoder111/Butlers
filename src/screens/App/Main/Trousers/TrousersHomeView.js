import React, { Component } from 'react'

import { View } from 'react-native'

import Basket from '../../../../components/Cleaning/BasketButton'
import ServicesList from '../../../../components/ServicesList'
import AnimatedClock from '../../../../components/AnimatedClock/AnimatedClock'

import { colors } from '../../../../styles'

import styles from './styles'

class TrousersHomeView extends Component {
	componentDidMount() {
		// eslint-disable-next-line react/destructuring-assignment
		this.props.getList()
	}

	render() {
		const {
			forwardTo,
			isServicesLoading,
			services,
			navigation,
			total,
			isAuthenticatedLoading,
		} = this.props
		return (
			<>
				{isAuthenticatedLoading ? null : (
					<>
						{isServicesLoading ? (
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
					</>
				)}
			</>
		)
	}
}

export default TrousersHomeView
