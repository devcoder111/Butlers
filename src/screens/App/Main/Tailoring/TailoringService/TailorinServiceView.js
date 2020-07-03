import React, { Component } from 'react'
import {
	ScrollView,
	Text,
	View,
	TouchableWithoutFeedback,
	SafeAreaView,
	FlatList,
	Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Translate from '@app/translations'
import TailoringListItem from './TailoringList/TailoringList'
import ForwardButton from '../../../../../components/Registration/components/ForwardButton/ForwardButton'
import AnimatedClock from '../../../../../components/AnimatedClock/AnimatedClock'

import { colors } from '../../../../../styles'

import styles from './styles'

class TailoringServiceView extends Component {
	render() {
		const {
			navigation,
			basket,
			addItem,
			deleteItem,
			getServices,
			types,
			services,
			activeCategory,
			setActiveCategory,
			isServicesLoading,
			isTypesLoading,
			tailoring,
			setSelectedCategoryErrorVisible,
			setSelectedCategoryErrorHidden,
			selectedCategoryError,
			forwardTo,
		} = this.props

		const getCurrentServices = id => {
			getServices(id)
		}
		const tailoringList = services.filter(service => service.is_tailoring === 1)
		const tailoringCategories = types.filter(el => el.is_tailoring === 1)
		return (
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.bar}>
					<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
						<Icon color={colors.black} name="arrow-left" size={25} />
					</TouchableWithoutFeedback>
				</View>
				<Text style={styles.title}>
					<Translate value="TAILORING_selectService_heading" />
				</Text>
				<Text style={[styles.error, { opacity: selectedCategoryError ? 1 : 0 }]}>
				<Translate value="TAILORING_whatToDo_cantSelectTailoring" />
				</Text>
				<Text style={styles.text}>
					<Translate value="TAILORING_selectService_firstStepText" />
				</Text>
				<ScrollView horizontal style={styles.slider} showsHorizontalScrollIndicator={false}>
					{isTypesLoading ? (
						<View style={styles.loaderContainer}>
							<View style={styles.spinnerWrap}>
								<AnimatedClock color={colors.green} />
							</View>
						</View>
					) : (
						tailoringCategories.map(item => {
							return (
								<TouchableWithoutFeedback
									styles={styles.slideTouch}
									key={item.id}
									onPress={() => {
										if (tailoring.length === 0) {
											setActiveCategory(item.id)
											getCurrentServices(item.id)
										} else setSelectedCategoryErrorVisible()
									}}
								>
									<View style={styles.slide}>
										<View
											style={[
												styles.iconWrap,
												activeCategory === item.id ? styles.active : styles.inactive,
											]}
										>
											{item.file_link ? (
												<Image source={{ uri: item.file_link }} style={{ height: 60, width: 60 }} />
											) : (
												<Icon color={colors.white} name="ghost" size={50} />
											)}
										</View>
										<Text
											style={[
												styles.tabText,
												activeCategory === item.id ? styles.activeText : styles.inactiveText,
											]}
										>
											{item.name}
										</Text>
									</View>
								</TouchableWithoutFeedback>
							)
						})
					)}
				</ScrollView>
				{activeCategory === 0 ? null : (
					<>
						<Text style={styles.text}>
							<Translate value="TAILORING_selectService_secondStepText" />
						</Text>
						<ScrollView
							style={styles.list}
							automaticallyAdjustContentInsets
							showsVerticalScrollIndicator={false}
						>
							{isServicesLoading ? (
								<View style={styles.loaderContainerWithPadding}>
									<View style={styles.spinnerWrap}>
										<AnimatedClock color={colors.green} />
									</View>
								</View>
							) : (
								<FlatList
									data={tailoringList}
									basket={basket}
									renderItem={item => (
										<TailoringListItem
											addItem={addItem}
											deleteItem={deleteItem}
											data={item}
											tailoring={tailoring}
											setSelectedCategoryErrorHidden={setSelectedCategoryErrorHidden}
										/>
									)}
									keyExtractor={item => item.id}
								/>
							)}
						</ScrollView>
					</>
				)}
				<View style={styles.forwardView}>
					<ForwardButton forwardTo={forwardTo} value={tailoring[0]} />
				</View>
			</SafeAreaView>
		)
	}
}

export default TailoringServiceView
