import React, { PureComponent } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Touchable from '../../Shared/Touchable/Touchable'

import styles from './styles'

class SearchButton extends PureComponent {
	render() {
		return (
			<Touchable
				buttonStyle={styles.button}
				containerStyle={styles.container}
				onPress={this.props.onPress}
			>
				<Icon name="search1" size={25} color="#fff" />
			</Touchable>
		)
	}
}

export default SearchButton
