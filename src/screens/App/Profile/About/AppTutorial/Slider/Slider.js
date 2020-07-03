import React, { Component } from 'react'
import { ScrollView, View, Animated, Text, Dimensions } from 'react-native'

import styles from './styles'

class Slider extends Component {
	animVal = new Animated.Value(0)

	render() {
		const deviceWidth = Dimensions.get('window').width

		const firstBar = this.animVal.interpolate({
			inputRange: [0, deviceWidth, deviceWidth * 2],
			outputRange: [1.8, 1, 1],
			extrapolate: 'clamp',
		})
		const secondBar = this.animVal.interpolate({
			inputRange: [0, deviceWidth, deviceWidth * 2],
			outputRange: [1, 1.8, 1],
			extrapolate: 'clamp',
		})
		const thirdBar = this.animVal.interpolate({
			inputRange: [0, deviceWidth, deviceWidth * 2],
			outputRange: [1, 1, 1.8],
			extrapolate: 'clamp',
		})
		const firstBarColor = this.animVal.interpolate({
			inputRange: [0, deviceWidth, deviceWidth * 2],
			outputRange: ['#1E272E', '#bbb', '#bbb'],
			extrapolate: 'clamp',
		})
		const secondBarColor = this.animVal.interpolate({
			inputRange: [0, deviceWidth, deviceWidth * 2],
			outputRange: ['#bbb', '#1E272E', '#bbb'],
			extrapolate: 'clamp',
		})
		const thirdBarColor = this.animVal.interpolate({
			inputRange: [0, deviceWidth, deviceWidth * 2],
			outputRange: ['#bbb', '#bbb', '#1E272E'],
			extrapolate: 'clamp',
		})

		return (
			<View style={styles.container}>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={10}
					pagingEnabled
					style={styles.scrollContainer}
					onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.animVal } } }])}
				>
					<View style={styles.slide}>
						<Text style={styles.header}>Choose the category</Text>
						<Text style={styles.text}>
							If you need to dry clean your shirts, choose "Shirts" at bottom slider.
						</Text>
					</View>
					<View style={styles.slide}>
						<Text style={styles.header}>Choose the category</Text>
						<Text style={styles.text}>
							If you need to dry clean your shirts, choose "Shirts" at bottom slider.
						</Text>
					</View>
					<View style={styles.slide}>
						<Text style={styles.header}>Choose the category</Text>
						<Text style={styles.text}>
							If you need to dry clean your shirts, choose "Shirts" at bottom slider.
						</Text>
					</View>
				</ScrollView>
				<View style={styles.barWrap}>
					<Animated.View
						style={[
							styles.bar,
							{
								transform: [{ scale: firstBar }],
								backgroundColor: firstBarColor,
							},
						]}
					/>
					<Animated.View
						style={[
							styles.bar,
							{
								transform: [{ scale: secondBar }],
								backgroundColor: secondBarColor,
							},
						]}
					/>
					<Animated.View
						style={[
							styles.bar,
							{
								transform: [{ scale: thirdBar }],
								backgroundColor: thirdBarColor,
							},
						]}
					/>
				</View>
			</View>
		)
	}
}

export default Slider
