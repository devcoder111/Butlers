import React from 'react'
import { StyleSheet, View, TextInput, Platform, TouchableWithoutFeedback } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../../../styles'

const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	text: {
		width: '100%',
		fontSize: 20,
		paddingLeft: 0,
		paddingVertical: 5,
		paddingRight: 20,
		paddingTop: Platform.OS === 'ios' ? 10 : 0,
		paddingBottom: Platform.OS === 'ios' ? 10 : 0,
	},
	clear: {
		position: 'absolute',
		right: 0,
		bottom: 5,
		padding: 5,
	},
})

const chooseKeyboard = type => {
	switch (type) {
		case 'num':
			return Platform.OS === 'ios' ? 'number-pad' : 'numeric'
		default:
			return 'default'
	}
}

const Input = ({
	type,
	value,
	onChangeText,
	onClear,
	secureTextEntry,
	color = '#1E272E',
	selectionColor = '#1E272E',
	closeButton = true,
	maxLength = 30,
	placeholder = '',
	...props
}) => {
	// let defaultColor = '#1E272E'
	return (
		<View style={styles.container}>
			<TextInput
				style={[styles.text, { color }]}
				selectionColor={selectionColor}
				keyboardType={chooseKeyboard(type)}
				onChangeText={onChangeText}
				value={value}
				maxLength={maxLength}
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				placeholderTextColor={colors.gray}
				{...props}
			/>
			{value && closeButton ? (
				<TouchableWithoutFeedback onPress={onClear}>
					<View style={styles.clear}><Icon name="closecircle" size={20} color="#ddd" /></View>
				</TouchableWithoutFeedback>
			) : null}
		</View>
	)
}
export default Input
