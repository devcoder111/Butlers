import React, { Component } from 'react'
import { Animated, Easing, View, StyleSheet } from 'react-native'

import Icon from '../../assets'
import styles from '../Registration/components/ValidationError/styles'

class SpinLoading extends Component {
	constructor(props) {
		super(props)
		this.spinValue = new Animated.Value(0)
	}

	componentDidMount() {
		this.spin()
	}

	spin() {
		this.spinValue.setValue(0)
		Animated.timing(this.spinValue, {
			toValue: 1,
			duration: 20000,
			easing: Easing.linear,
			useNativeDriver: true,
		}).start(() => this.spin())
	}

	render() {
		const spinner = this.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '720deg'],
		})
		const { color } = this.props
		const tintColor = color
		const styles = StyleSheet.create({
			spinning: {
				borderWidth: 6.4,
				borderColor: 'rgba(256,256,256,0.6)',
				borderTopColor: '#2ED573',
				borderRadius: 100,
				width: 70,
				height: 70,
				// position: 'absolute',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			},
		})

		return (

				<Animated.View
					style={{
						transform: [{ rotate: spinner }],
					}}
				>
					<View style={styles.spinning}>

					</View>
					{/* {Icon('Clock', tintColor)} */}
				</Animated.View>
		)
	}
}

export default SpinLoading
