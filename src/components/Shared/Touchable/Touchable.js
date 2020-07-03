import React, { PureComponent } from 'react'
import { View, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native'

class Touchable extends PureComponent {
	render() {
		const { props } = this
		return (
			<View style={props.containerStyle}>
				{Platform.OS == 'ios' ? (
					<TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
						{props.children}
					</TouchableOpacity>
				) : (
					<TouchableNativeFeedback style={props.buttonStyle} onPress={props.onPress}>
						<View style={props.buttonStyle}>{props.children}</View>
					</TouchableNativeFeedback>
				)}
			</View>
		)
	}
}

export default Touchable
