import React, { Component } from 'react'
import {
	ScrollView,
	Animated,
	Text,
	View,
	TouchableWithoutFeedback,
	SafeAreaView,
	Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { colors } from '../../../../styles'

import FAQAccordian from '../../Profile/About/FAQ/FAQAccordian/FAQAccordian'
import Basket from '../../../../components/Cleaning/BasketButton'
import AnimatedClock from '../../../../components/AnimatedClock/AnimatedClock'

import styles from './styles'

import CleaningServiceItem from './CleaningServiceItem'

const deviceWidth = Dimensions.get('window').width
const HEADER_MAX_HEIGHT = deviceWidth * 0.5
const HEADER_MIN_HEIGHT = 80
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

class CleaningServiceView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			scrollY: new Animated.Value(0),
		}
	}

	render() {
		const { scrollY } = this.state
		const headerHeight = scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE],
			outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
			extrapolate: 'clamp',
		})

		const imageOpacity = scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
			outputRange: [1, 1, 0],
			extrapolate: 'clamp',
		})
		const imageTranslate = scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE],
			outputRange: [0, -50],
			extrapolate: 'clamp',
		})

		const {
			navigation,
			navigateTo,
			services,
			addItemToBasket,
			deleteItemFromBasket,
			addFavorite,
			deleteFavorite,
			servicesLoading,
			id,
			faq,
			categories,
		} = this.props

		const category = categories.find(item => item.id === id)
		return (
			<View style={{ flex: 1, position: 'relative' }}>
				<ScrollView
					style={{ flex: 1 }}
					scrollEventThrottle={16}
					onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
				>
					<View style={styles.scrollViewContent}>
						{servicesLoading ? (
							<View style={styles.loaderContainerWithPadding}>
								<View style={styles.spinnerWrap}>
									<AnimatedClock color={colors.green} />
								</View>
							</View>
						) : (
							services.map(item => (
								<CleaningServiceItem
									data={item}
									addFavorite={addFavorite}
									deleteFavorite={deleteFavorite}
									addItemToBasket={addItemToBasket}
									deleteItemFromBasket={deleteItemFromBasket}
								/>
							))
						)}
						{faq ? (
							<>
								<View style={{ marginTop: 20, marginBottom: -10 }}>
									<Text style={styles.text}>FAQs:</Text>
								</View>
								<FAQAccordian navigation={navigation} faq={faq} />
							</>
						) : null}
					</View>
				</ScrollView>
				<Basket navigateTo={() => navigateTo('Basket')} />
				<Animated.View style={[styles.header, { height: headerHeight }]}>
					<Animated.Image
						style={[
							styles.backgroundImage,
							{
								opacity: imageOpacity,
								transform: [{ translateY: imageTranslate }],
							},
						]}
						source={
							category.file_link
								? { uri: category.file_link }
								: require('../../../../assets/chinos.png')
						}
					/>
					<View style={styles.infoView}>
						<Text style={styles.headerText}>{category.name}</Text>
						<Text style={styles.infoText}>{category.description}</Text>
					</View>
					<Animated.View style={styles.bar}>
						<SafeAreaView>
							<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
								<Icon color={colors.black} name="arrow-left" size={25} />
							</TouchableWithoutFeedback>
						</SafeAreaView>
					</Animated.View>
				</Animated.View>
			</View>
		)
	}
}

export default CleaningServiceView
