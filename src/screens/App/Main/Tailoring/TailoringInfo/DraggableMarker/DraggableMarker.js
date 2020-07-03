/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Animated, PanResponder, View, Text } from 'react-native'

import styles from './styles'

class Draggable extends Component {
	x = 0

	y = 0

	constructor(props) {
		super(props)

		const position = new Animated.ValueXY()
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({ x: this.x + gesture.dx, y: this.y + gesture.dy })
			},
			onPanResponderRelease: (event, gesture) => {
				this.x += gesture.dx
				this.y += gesture.dy
				this.props.onChangeCoordinates(this.x, this.y, this.props.alphIdx, this.props.item.id)
			},
		})
		this.state = { panResponder, position }
	}

	getBallStyle() {
		const { position } = this.state

		return position.getLayout()
	}

	render() {
		const { panResponder } = this.state
		const { item, alphIdx } = this.props
		const alphabet = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z',
		]
		return (
			<View style={styles.container}>
				<Animated.View
					style={[this.getBallStyle(), styles.circle, { backgroundColor: item.color }]}
					{...panResponder.panHandlers}
				>
					<Text style={styles.icon}>{alphabet[alphIdx]}</Text>
				</Animated.View>
			</View>
		)
	}
}

export default Draggable
