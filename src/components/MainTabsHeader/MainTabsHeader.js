import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import SearchHeader from './SearchHeader/SearchHeader'
import styles from './styles'

class MainTabsHeader extends Component {
	render() {
		const {
			visibleInput,
			navigation,
			user,
			id,
			welcomeMessageEn,
			welcomeMessageDa,
			actionMessageEn,
			actionMessageDa,
		} = this.props
		// const id = navigation.state.routes[index].params.adminPanelId

		return (
			<SafeAreaView style={styles.barContainer}>
				{visibleInput ? (
					<View style={styles.headerContainer}>
						<View style={styles.left}>
							<Text style={styles.title}>
								{user.locale === 'en' ? welcomeMessageEn : welcomeMessageDa} {user.first_name}!
							</Text>
							<Text style={styles.subtitle}>
								{user.locale === 'en' ? actionMessageEn : actionMessageDa}
							</Text>
						</View>
						<View style={styles.right}>
							<Text style={styles.version}>0.0.55</Text>
						</View>
					</View>
				) : (
					<View style={styles.searchWrap}>
						<SearchHeader navigation={navigation} id={id} />
					</View>
				)}
			</SafeAreaView>
		)
	}
}

export default MainTabsHeader
