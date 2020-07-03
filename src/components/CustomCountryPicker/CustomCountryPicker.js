import React, { Component } from 'react'
import { StyleSheet, View, Picker, Modal, Text } from 'react-native'

import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Translate from '@app/translations'
import { colors } from '../../styles'

import { countries } from '../../constants/countries'

const styles = StyleSheet.create({
	modalContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: colors.white,
	},
	pickerContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.black,
		padding: 15,
	},
	picker: {
		backgroundColor: colors.white,
	},
	pickerText: {
		fontSize: 15,
	},
})

class CustomCountryPicker extends Component {
	constructor(props) {
		super(props)

		this.state = {
			country: 'Denmark(Danmark)|45',
		}
	}

	componentDidMount = () => {
		const { changeCountry } = this.props
		const { country } = this.state
		changeCountry(country)
	}

	onValueChanged = value => {
		this.setState({ country: value })
	}

	finishChoosingCountry = () => {
		const { togglePicker, changeCountry } = this.props
		const { country } = this.state
		changeCountry(country)
		togglePicker()
	}

	render() {
		const { country } = this.state
		const { isPickerVisible, togglePicker } = this.props
		return (
			<Modal animationType="slide" transparent visible={isPickerVisible}>
				<View style={styles.modalContainer}>
					<View style={styles.pickerContainer}>
						<TouchableWithoutFeedback onPress={togglePicker}>
							<Text style={styles.pickerText}>
								<Translate value="TAILORING_uploadPicture_cancelSelect" />
							</Text>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback onPress={this.finishChoosingCountry}>
							<Text style={styles.pickerText}>
								<Translate value="PROFILE_selectCardToPay_successButton" />
							</Text>
						</TouchableWithoutFeedback>
					</View>
					<Picker
						style={styles.picker}
						selectedValue={country}
						onValueChange={value => this.onValueChanged(value)}
					>
						{countries.map(item => {
							return <Picker.Item label={item.name} value={`${item.name}|${item.dialCode}`} />
						})}
					</Picker>
				</View>
			</Modal>
		)
	}
}

export default CustomCountryPicker
