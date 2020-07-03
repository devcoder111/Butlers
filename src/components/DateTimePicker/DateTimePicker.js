import React, { Component } from 'react'
import { View, Button, Platform } from 'react-native'
import Picker from '@react-native-community/datetimepicker'

class DateTimePicker extends Component {
	state = {
		date: new Date('2020-06-12T14:42:42'),
		mode: 'date',
		show: false,
	}

	setDate = (event, d) => {
		const { date } = this.state
		const dat = d || date

		this.setState({
			show: Platform.OS === 'ios',
			date: dat,
		})
	}

	show = mode => {
		this.setState({
			show: true,
			mode,
		})
	}

	datepicker = () => {
		this.show('date')
	}

	timepicker = () => {
		this.show('time')
	}

	render() {
		const { show, date, mode } = this.state

		return (
			<View>
				<View>
					<Button onPress={this.datepicker} title="Show date picker!" />
				</View>
				<View>
					<Button onPress={this.timepicker} title="Show time picker!" />
				</View>
				{show && (
					<Picker value={date} mode={mode} is24Hour display="default" onChange={this.setDate} />
				)}
			</View>
		)
	}
}

export default DateTimePicker
