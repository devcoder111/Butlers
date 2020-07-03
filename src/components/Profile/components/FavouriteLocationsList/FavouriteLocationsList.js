import React from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './styles'

const FavouriteLocationsList = () => {
	const data = [
		{
			first: 'true',
			second: 'false',
		},
		{
			first: 'true',
			second: 'false',
		},
		{
			first: 'true',
			second: 'false',
		},
		{
			first: 'true',
			second: 'false',
		},
		{
			first: 'true',
			second: 'false',
		},
	]
	return (
		<View>
			<Text style={styles.title}>Default locations</Text>
			<FlatList
				style={styles.list}
				data={data}
				renderItem={item => (
					<View style={styles.listItem}>
						<Text>{item.item.first}</Text>
					</View>
				)}
				keyExtractor={item => item.id}
			/>
			<Text style={styles.title}>Additional locations</Text>
			<FlatList
				style={styles.list}
				data={data}
				renderItem={item => (
					<View style={styles.listItem}>
						<Text>{item.item.second}</Text>
					</View>
				)}
				keyExtractor={item => item.id}
			/>
		</View>
	)
}

export default FavouriteLocationsList
