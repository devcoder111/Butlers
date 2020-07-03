import React, { PureComponent } from 'react'
import { TextInput, View } from 'react-native'

import styles from './styles'

class SearchInput extends PureComponent {
	onChangeInput = value => {
		this.props.changeText({ value })
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					onChangeText={this.onChangeInput}
					{...this.props}
					maxLength={this.props.length}
					keyboardType={this.props.keyboardType}
					textContentType={this.props.type}
					placeholder={this.props.placeholder}
					placeholderTextColor="#fff"
					name={this.props.name}
				/>
			</View>
		)
	}
}

export default SearchInput
