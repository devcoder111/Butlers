import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import ServicesListItem from '../ServicesListItem'

const styles = StyleSheet.create({
	list: {
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
})

const ServicesList = ({ data, navigateTo }) => {
	return (
		<FlatList
			style={styles.list}
			data={data}
			renderItem={item => <ServicesListItem navigateTo={navigateTo} data={item} />}
			keyExtractor={item => item.id}
		/>
	)
}

export default ServicesList
