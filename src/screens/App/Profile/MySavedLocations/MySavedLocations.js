import React from 'react'
import { Text, SafeAreaView, View, FlatList, Modal, TouchableOpacity } from 'react-native'
import Translate from '@app/translations'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import NavigationHeader from '../../../../components/Profile/components/NavigationHeader'
import Title from '../../../../components/Registration/components/Title'
import HomeItem from './HomeItem/HomeItem'
import AddNew from '../../../../components/Profile/components/AddNew'
import DeleteLocationModal from './DeleteLocationModal'

import styles from './styles'
import { colors } from '../../../../styles'

const MySavedLocations = ({
	navigation,
	locations,
	onModalChange,
	modalVisible,
	setModalVisible,
	deleteLocation,
	onChooseLocation,
	location,
	user,
	onChooseOffice,
}) => {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<NavigationHeader
					navigation={navigation}
					// onPress={
					// 	location
					// 		? () => {
					// 				navigation.navigate('OrderCompletion')
					// 		  }
					// 		: null
					// }
					onAction={() => {}}
				/>
				<Title color={colors.black}>
					<Translate value="PROFILE_mySavedLocationsLink" />
				</Title>
				<Text style={styles.subtitle}>
					<Translate value="PROFILE_mySavedLocationsTextLink" />{' '}
				</Text>
				<View>
					{user.company ? (
						<TouchableOpacity onPress={onChooseOffice}>
							<View style={[styles.b2bWrap, styles.borderTop]}>
								<View style={styles.nameView}>
									<View style={styles.iconView}>
										<SimpleLineIcons name="home" size={25} />
									</View>
									<Text style={styles.nameText}>{user.company.location.address}</Text>
								</View>
							</View>
						</TouchableOpacity>
					) : null}
					<FlatList
						data={locations}
						renderItem={({ item }) => (
							<HomeItem
								item={item}
								navigation={navigation}
								onModalChange={onModalChange}
								onChooseLocation={onChooseLocation}
								user={user}
							/>
						)}
						keyExtractor={item => item.id}
					/>
					<AddNew
						title={<Translate value="PROFILE_mySavedLocationsCreateLocationLink" />}
						icon="plus"
						navigation={navigation}
						navigateTo="NewLocations"
					/>
				</View>
				<Modal animationType="slide" transparent visible={modalVisible}>
					<DeleteLocationModal setModalVisible={setModalVisible} deleteLocation={deleteLocation} />
				</Modal>
			</SafeAreaView>
		</>
	)
}

export default MySavedLocations
