/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'

import Translate from '@app/translations'
import NotificationListItem from './NotificationListItem/NotificationListItem'
import NotificationListHeader from './NotificationListHeader/NotificationListHeader'

const DATA = [
	{
		title: <Translate value="PROFILE_messages_butlersMessages" />,
		subtitle: <Translate value="PROFILE_notifications_receiveFromText" />,
		data: [
			<Translate value="PROFILE_notifications_emails" />,
			<Translate value="PROFILE_notifications_pushes" />,
			<Translate value="PROFILE_notifications_sms" />,
		],
	},
	{
		title: <Translate value="PROFILE_notifications_alertsHeading" />,
		subtitle: <Translate value="PROFILE_notifications_alertsAbout" />,
		data: [
			<Translate value="PROFILE_notifications_emails" />,
			<Translate value="PROFILE_notifications_pushes" />,
			<Translate value="PROFILE_notifications_sms" />,
		],
	},
	{
		title: <Translate value="PROFILE_notifications_commercialsHeading" />,
		subtitle: <Translate value="PROFILE_notifications_commercialsAbout" />,
		data: [
			<Translate value="PROFILE_notifications_emails" />,
			<Translate value="PROFILE_notifications_pushes" />,
			<Translate value="PROFILE_notifications_sms" />,
		],
	},
	{
		title: <Translate value="PROFILE_notifications_supportHeading" />,
		subtitle: <Translate value="PROFILE_notifications_supportAbout" />,
		data: [
			<Translate value="PROFILE_notifications_emails" />,
			<Translate value="PROFILE_notifications_pushes" />,
			<Translate value="PROFILE_notifications_sms" />,
			<Translate value="PROFILE_notifications_phone" />,
		],
	},
]

class NotificationList extends Component {
	state = {
		switch1: true,
		switch2: false,
		switch3: false,
		switch4: true,
		switch5: false,
		switch6: false,
		switch7: true,
		switch8: false,
		switch9: false,
		switch10: true,
		switch11: false,
		switch12: false,
		switch13: false,
	}

	writeData = ({ name, value }) => {
		const { onChange } = this.props
		onChange({ [name]: value })
	}

	render() {
		const { loading, options } = this.props
		return (
			<SafeAreaView>
				<NotificationListHeader title={DATA[0].title} subtitle={DATA[0].subtitle} />
				<NotificationListItem
					title={DATA[0].data[0]}
					name="receive_messages_email"
					writeData={this.writeData}
					value={options.receive_messages_email === 1}
				/>
				<NotificationListItem
					title={DATA[0].data[1]}
					name="receive_messages_push"
					writeData={this.writeData}
					value={options.receive_messages_push === 1}
				/>
				<NotificationListItem
					title={DATA[0].data[2]}
					name="receive_messages_sms"
					writeData={this.writeData}
					value={options.receive_messages_sms === 1}
				/>
				<NotificationListHeader title={DATA[1].title} subtitle={DATA[1].subtitle} />
				<NotificationListItem
					title={DATA[1].data[0]}
					name="receive_alerts_email"
					writeData={this.writeData}
					value={options.receive_alerts_email === 1}
				/>
				<NotificationListItem
					title={DATA[1].data[1]}
					name="receive_alerts_push"
					writeData={this.writeData}
					value={options.receive_alerts_push === 1}
				/>
				<NotificationListItem
					title={DATA[1].data[2]}
					name="receive_alerts_sms"
					writeData={this.writeData}
					value={options.receive_alerts_sms === 1}
				/>
				<NotificationListHeader title={DATA[2].title} subtitle={DATA[2].subtitle} />
				<NotificationListItem
					title={DATA[2].data[0]}
					name="receive_commercial_email"
					writeData={this.writeData}
					value={options.receive_commercial_email === 1}
				/>
				<NotificationListItem
					title={DATA[2].data[1]}
					name="receive_commercial_push"
					writeData={this.writeData}
					value={options.receive_commercial_push === 1}
				/>
				<NotificationListItem
					title={DATA[2].data[2]}
					name="receive_commercial_sms"
					writeData={this.writeData}
					value={options.receive_commercial_sms === 1}
				/>
				<NotificationListHeader title={DATA[3].title} subtitle={DATA[3].subtitle} />
				<NotificationListItem
					title={DATA[3].data[0]}
					name="receive_support_email"
					writeData={this.writeData}
					value={options.receive_support_email === 1}
				/>
				<NotificationListItem
					title={DATA[3].data[1]}
					name="receive_support_push"
					writeData={this.writeData}
					value={options.receive_support_push === 1}
				/>
				<NotificationListItem
					title={DATA[3].data[2]}
					name="receive_support_sms"
					writeData={this.writeData}
					value={options.receive_support_sms === 1}
				/>
				<NotificationListItem
					title={DATA[3].data[3]}
					name="receive_support_call"
					writeData={this.writeData}
					value={options.receive_support_call === 1}
				/>
			</SafeAreaView>
		)
	}
}

export default NotificationList
