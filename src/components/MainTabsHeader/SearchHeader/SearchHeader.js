/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { PureComponent } from 'react'
import { SafeAreaView, View, Keyboard, TouchableOpacity, Text } from 'react-native'

import Translate from '@app/translations'
import SearchButton from '../../SearchInput/SearchButton/SearchButton'

import styles from './styles'

class SearchHeader extends PureComponent {
	state = {
		request: '',
	}

	changeText = value => this.setState({ request: value })

	forwardTo = () => {
		const { navigation, id } = this.props
		navigation.navigate('SearchProducts', {
			id,
		})
	}

	onSearch = () => {
		if (this.state.request.value != null && this.state.request.value !== '') {
			Keyboard.dismiss()
			this.props.navigation.navigate()
		}
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<TouchableOpacity onPress={this.forwardTo}>
					<View style={styles.inputContainer}>
						<SearchButton onPress={this.onSearch} />
						<View />
						<Text style={styles.text}>
							<Translate value="MAIN_searchPlaceholder" />
						</Text>
					</View>
				</TouchableOpacity>
			</SafeAreaView>
		)
	}
}

export default SearchHeader
