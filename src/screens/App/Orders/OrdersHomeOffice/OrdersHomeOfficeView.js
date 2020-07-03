import React from 'react'
import { View, SafeAreaView, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native'

import Title from '../../../../components/Registration/components/Title/Title'
import OrdersListItemOffice from './OrdersListItemOffice/OrdersListItemOffice'
import AnimatedClock from '../../../../components/AnimatedClock/AnimatedClock'

// import styles from './styles'
import styles from './styles'
import { colors } from '../../../../styles'

const OrdersHomeOfficeView = ({
	orders,
	navigation,
	types,
	location,
	getLocation,
	isOrdersLoading,
}) => {
	return (
		<SafeAreaView>
			<View style={styles.wrap}>
				<ScrollView>
					<View style={styles.container}>
						<Title color="#1E272E">My Orders</Title>
						{isOrdersLoading ? (
							<View style={styles.loaderContainer}>
								<AnimatedClock color={colors.green} />
							</View>
						) : (
							<View>
								<FlatList
									style={styles.ordersList}
									data={orders}
									renderItem={({ item }) => (
										<OrdersListItemOffice
											item={item}
											navigation={navigation}
											types={types}
											location={location}
											getLocation={getLocation}
										/>
									)}
									keyExtractor={item => item.id}
								/>
								{getLocation()}
							</View>
						)}
					</View>
				</ScrollView>
				<TouchableOpacity style={[styles.fixedItem]}>
					<View>
						<Text style={styles.centeredText}>Come pick up my clothes</Text>
						<Text style={styles.centeredText}> at the office</Text>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default OrdersHomeOfficeView
