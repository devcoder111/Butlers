import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
// import { useTranslation } from 'react-i18next'

import { colors } from '../../styles'

import { toTenSymbols } from '../../helpers/services'

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	item: {
		display: 'flex',
		// justifyContent: 'space-between',
		marginBottom: 20,
		borderRadius: 10,
		shadowColor: '#1E272E',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
		backgroundColor: colors.gray,
	},
	top: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-end',
		alignContent: 'flex-start',
		alignItems: 'flex-start',
	},
	save: {
		backgroundColor: colors.green,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	saveText: {
		lineHeight: 28,
		fontSize: 14,
		color: colors.white,
		fontWeight: '500',
	},
	heart: {},
	title: {
		fontSize: 16,
		fontWeight: '600',
		color: colors.black,
		lineHeight: 22,
	},
	image: {
		height: (deviceWidth - 40) * 0.5,
		width: deviceWidth - 40,
		resizeMode: 'cover',
	},
	bottomTextView: {
		backgroundColor: '#fff',
		bottom: 0,
		left: 0,
		width: '100%',
		padding: 15,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
	},
	imageWrap: {
		// position: 'absolute',
		// zIndex: 0,
		height: (deviceWidth - 40) * 0.5,
		width: deviceWidth - 40,
		overflow: 'hidden',
	},
	text: {
		fontSize: 15,
		fontWeight: '300',
		color: colors.black,
		lineHeight: 22,
	},
	textButton: {
		marginTop: 10,
		fontSize: 15,
		fontWeight: '400',
		color: colors.black,
		lineHeight: 22,
	},
})

const ServicesListItem = ({ data: { item }, navigateTo }) => {
	return (
		<TouchableWithoutFeedback onPress={() => navigateTo('Cleaning', item.id)}>
			<View style={styles.item}>
				<View style={styles.imageWrap}>
					{item.file_link ? (
						<Image
							source={{ uri: item.file_link }}
							style={{ width: deviceWidth - 40, height: (deviceWidth - 40) * 0.5 }}
						/>
					) : (
						<Image source={require('../../assets/chinos.png')} style={styles.image} />
					)}
				</View>
				{/* <View style={styles.top}>
					<View style={styles.save}>
						<Text style={styles.saveText}>SAVE 20%</Text>
					</View>
				</View> */}
				<View style={styles.bottomTextView}>
					<View>
						<Text style={styles.title}>{item.name}</Text>
					</View>
					<View>
						<Text style={styles.text}>{toTenSymbols(item.description)}</Text>
						<Text style={styles.textButton}>View more</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ServicesListItem
