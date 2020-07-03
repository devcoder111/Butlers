import React from 'react'
import { FlatList, ScrollView } from 'react-native'

import ListItem from './ListItem/ListItem'

import styles from './styles'

const FAQAccordian = ({ faq }) => {
	return (
		<ScrollView style={styles.wrap}>
			<FlatList
				data={faq}
				renderItem={({ item }) => <ListItem title={item.request} text={item.answer} />}
				keyExtractor={item => item.id}
			/>
		</ScrollView>
	)
}

export default FAQAccordian
