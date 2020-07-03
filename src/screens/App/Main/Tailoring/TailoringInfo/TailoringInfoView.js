/* eslint-disable no-param-reassign */
import React, { Component } from 'react'
import {
	ScrollView,
	Text,
	View,
	TouchableWithoutFeedback,
	SafeAreaView,
	FlatList,
	Keyboard,
	Image,
	Animated,
} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Shirt from 'react-native-vector-icons/Ionicons'
import Translate from '@app/translations'
import ForwardButton from '../../../../../components/Registration/components/ForwardButton/ForwardButton'
import TailoringMarkerList from './TailoringMarkerList/TailoringMarkerList'
import Draggable from './DraggableMarker/DraggableMarker'

import { colors } from '../../../../../styles'

import styles from './styles'

class TailoringInfoView extends Component {
	render() {
		const {
			navigation,
			tailoring,
			addMarker,
			deleteMarker,
			onComment,
			comments,
			onChangeCoordinates,
			coordinates,
			changeCoordinates,
			forwardTo,
			categories,
			types,
			shift,
			keyboardShow,
		} = this.props
		const getImage = () => {
			if (tailoring[0]) {
				const category = types.find(item => item.id === tailoring[0].type_id)
				if (category.tailoring_file_link) {
					return (
						<Image
							source={{ uri: category.tailoring_file_link }}
							style={{ height: 300, width: 300 }}
						/>
					)
				}
				return <Shirt color={colors.gray} name="ios-shirt" size={300} />
			}
			return <Shirt color={colors.gray} name="ios-shirt" size={300} />
		}
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<SafeAreaView style={styles.safeArea}>
					<View style={styles.bar}>
						<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
							<Icon color={colors.black} name="arrow-left" size={25} />
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
							<EvilIcon color={colors.black} name="close" size={40} />
						</TouchableWithoutFeedback>
					</View>
					<Text style={styles.title}>
						<Translate value="TAILORING_whatToDo_heading" />
					</Text>
					<Text style={styles.text}>
						<Translate value="TAILORING_whatToDo_selectLabel" />
					</Text>
					<View style={styles.markerSection}>
						{getImage()}
						<View style={styles.DraggableView}>
							{tailoring.map((item, index) =>
								item.marker ? (
									<Draggable
										onChangeCoordinates={onChangeCoordinates}
										alphIdx={index}
										item={item}
										key={item.color + item.id}
									/>
								) : null,
							)}
						</View>
					</View>
					{console.log(tailoring)}

					<Animated.View
						style={[
							keyboardShow ? styles.animatedComments : null,
							{ transform: [{ translateY: shift }] },
						]}
					>
						<ScrollView
							style={styles.list}
							automaticallyAdjustContentInsets
							showsVerticalScrollIndicator={false}
						>
							<FlatList
								data={tailoring}
								renderItem={({ item, index }) => (
									<TailoringMarkerList
										addMarker={addMarker}
										item={item}
										index={index}
										comments={comments}
										deleteMarker={deleteMarker}
										onComment={onComment}
										shift={shift}
									/>
								)}
								keyExtractor={index => index}
							/>
						</ScrollView>
					</Animated.View>
					<View style={styles.forwardView}>
						<ForwardButton
							forwardTo={forwardTo}
							value={1}
							comments={comments}
							coordinates={coordinates}
						/>
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		)
	}
}

export default TailoringInfoView
