import React, { PureComponent } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { colors } from '../../../../../../../styles'

import styles from './styles'

class ListItem extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isActive: false,
		}
	}

	render() {
		const { title, text } = this.props
		const { isActive } = this.state
		return (
			<TouchableWithoutFeedback onPress={() => this.setState({ isActive: !isActive })}>
				<View style={styles.itemWrap}>
					<View style={styles.rowWrap}>
						<Text style={styles.itemTitle}>{title}</Text>
						<Icon color={colors.gray} name={isActive ? 'arrow-down' : 'arrow-right'} size={25} />
					</View>
					{isActive ? (
						<View style={styles.textWrap}>
							<Text styles={styles.itemText}>{text}</Text>
						</View>
					) : null}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

export default ListItem
