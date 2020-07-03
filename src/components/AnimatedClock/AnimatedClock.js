import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'

import Icon from '../../assets'

class AnimatedClock extends Component {
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
			duration: 2000,
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
		return (
			<Animated.View
				style={{
					transform: [{ rotate: spinner }],
				}}
			>
				{Icon('Clock', tintColor)}
			</Animated.View>
		)
	}
}

export default AnimatedClock
