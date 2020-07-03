import React from 'react'
import { SafeAreaView, Text, View, ScrollView, TouchableOpacity } from 'react-native'

import Translate from '@app/translations'
import { Title, Label, Input } from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
// import StoreMap from '../StoreMap/StoreMap'

import styles from './styles'
import { colors } from '../../../../../styles'

const NewLocations = ({
	navigation,
	onChange,
	onClear,
	locationName,
	address,
	floorNo,
	apartmentNo,
	openSearchModal,
	onConfirm,
}) => {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationHeader navigation={navigation} onAction={() => {}} />
			<ScrollView>
				<Title color={colors.black}>
					<Translate value="PROFILE_editLocationLabel" />
				</Title>
				<View style={styles.labelView}>
					<Label>
						<Translate value="PROFILE_locationNameLabel" />
					</Label>
				</View>
				<View style={styles.inputView}>
					<Input
						onClear={onClear('locationName')}
						value={locationName}
						onChangeText={onChange('locationName')}
					/>
				</View>
				<View style={styles.labelView}>
					<Label>
						<Translate value="PROFILE_addressLabel" />
					</Label>
				</View>
				<TouchableOpacity
					onPress={() => {
						openSearchModal()
					}}
				>
					<View style={styles.inputView}>
						<Text style={styles.inputText}>{address}</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.labelView}>
					<Label>
						<Translate value="PROFILE_floorNoLabel" />
					</Label>
				</View>
				<View style={styles.inputView}>
					<Input onClear={onClear('floorNo')} value={floorNo} onChangeText={onChange('floorNo')} />
				</View>
				<View style={styles.labelView}>
					<Label>
						<Translate value="PROFILE_apartmentNoLabel" />
					</Label>
				</View>
				<View style={styles.inputView}>
					<Input
						onClear={onClear('apartmentNo')}
						value={apartmentNo}
						onChangeText={onChange('apartmentNo')}
					/>
				</View>
			</ScrollView>
			<TouchableOpacity style={[styles.fixedItem]} onPress={onConfirm}>
				<View>
					<Text style={styles.centeredText}>
						<Translate value="PROFILE_saveLocationButton" />
					</Text>
				</View>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default NewLocations
