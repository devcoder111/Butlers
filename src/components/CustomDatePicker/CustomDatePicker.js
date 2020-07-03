import React from 'react'
import { StyleSheet, View, Platform, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-datepicker'

import { colors } from '../../styles'

const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	clear: {
		position: 'absolute',
		right: 0,
		padding: 5,
		bottom: 5,
	},
})

const datepickerStyles = {
	dateIcon: {
		width: 0,
		height: 0,
	},
	dateInput: {
		borderWidth: 0,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	dateTouchBody: {
		textAlign: 'left',
	},
	dateText: {
		fontSize: 20,
		paddingLeft: 0,
		paddingVertical: 5,
		paddingRight: 20,
		paddingTop: Platform.OS === 'ios' ? 10 : 0,
		paddingBottom: Platform.OS === 'ios' ? 10 : 0,
		color: colors.black,
	},
	placeholderText: {
		fontSize: 20,
	},
	// datePickerCon: {
	// 	backgroundColor: '#565656',
	// 	borderWidth: 0,
	// },
	// datePicker: {
	// 	backgroundColor: '#5F5F5F',
	// 	borderWidth: 0,
	// },
	// btnTextConfirm: {
	// 	color: '#fff',
	// 	fontSize: 16,
	// 	fontWeight: '400',
	// },
}

const CustomDatePicker = props => {
	const { date, onChange, onClear, format, placeholder, maxDate } = props
	return (
		<View style={styles.container}>
			<DatePicker
				style={{ width: '100%', border: 'none' }}
				date={date}
				mode="date"
				placeholder={placeholder || '    /      /'}
				format={format}
				confirmBtnText="Done"
				cancelBtnText=""
				customStyles={datepickerStyles}
				onDateChange={onChange}
				showIcon={false}
				maxDate={maxDate}
			/>
			{date ? (
				<TouchableWithoutFeedback onPress={onClear}>
					<View style={styles.clear}><Icon name="closecircle" size={20} color="#ddd" /></View>
				</TouchableWithoutFeedback>
			) : null}
		</View>
	)
}

export default CustomDatePicker
