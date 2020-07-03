import React, { PureComponent } from 'react'
import { View, ScrollView, TouchableWithoutFeedback, Text, Image } from 'react-native'

import AnimatedClock from '../../../../../components/AnimatedClock/AnimatedClock'

import { colors } from '../../../../../styles'
import styles from './styles'

class MainTabs extends PureComponent {
	render() {
		const { tagsLoading, tags, activeCategory, setActiveCategory, getServices } = this.props
		const mainTags = tags
		return (
			<View style={styles.container}>
				{tagsLoading ? (
					<View style={styles.loaderContainerWithPadding}>
						<View style={styles.spinnerWrap}>
							<AnimatedClock color={colors.green} />
						</View>
					</View>
				) : (
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View style={{ width: 10 }} />
						{mainTags.map((item, index) => {
							return (
								<>
									<TouchableWithoutFeedback
										onPress={() => {
											setActiveCategory(item.id)
											getServices(item.id)
										}}
										key={item.id}
									>
										<View style={styles.itemContainer}>
											<View
												style={[
													styles.iconContainer,
													activeCategory === item.id ? styles.active : styles.inactive,
												]}
											>
												<View style={styles.icon}>
													{item.file_link ? (
														<Image
															source={{ uri: item.file_link }}
															style={{
																width: 52,
																height: 52,
																borderRadius: 26,
																resizeMode: 'center',
															}}
														/>
													) : (
														<View />
													)}
												</View>
											</View>
											<Text
												style={[
													styles.text,
													{ color: activeCategory === item.id ? colors.black : colors.gray },
												]}
											>
												{item.name}
											</Text>
										</View>
									</TouchableWithoutFeedback>
									{index === 1 ? (
										<TouchableWithoutFeedback
											onPress={() => {
												setActiveCategory(0)
											}}
											key={0}
										>
											<View style={styles.itemContainer}>
												<View
													style={[
														styles.iconContainer,
														activeCategory === 0 ? styles.active : styles.inactive,
													]}
												>
													<View style={styles.icon}>
														<Image
															source={require('../../../../../assets/TailoringIcon.png')}
															style={{ height: 30, width: 30 }}
														/>
													</View>
												</View>
												<Text
													style={[
														styles.text,
														{ color: activeCategory === 0 ? colors.black : colors.gray },
													]}
												>
													Tailoring
												</Text>
											</View>
										</TouchableWithoutFeedback>
									) : null}
								</>
							)
						})}
						<View style={{ width: 10 }} />
					</ScrollView>
				)}
			</View>
		)
	}
}

export default MainTabs
