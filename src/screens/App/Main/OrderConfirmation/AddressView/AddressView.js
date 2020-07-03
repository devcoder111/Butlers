/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'

import { View, Text } from 'react-native'

import Translate from '@app/translations'
import { convertTime, convertDate } from '../../../../../helpers/time'

import styles from './styles'

class AddressView extends Component {
	render() {
		const {
			order,
			customerLocations,
			butlersLocations,
			customerGroup,
			doneOrder,
			user,
		} = this.props
		const dropOffCustomerLocation = customerLocations.find(
			el => el.id === order.pickup_customer_location_id,
		)
		const pickUpCustomerLocation = customerLocations.find(
			el => el.id === order.delivery_customer_location_id,
		)
		const dropOffLocation = butlersLocations.find(el => el.id === order.pickup_location_id)
		const pickUpLocation = butlersLocations.find(el => el.id === order.delivery_location_id)

		const currentCustomerGroup =
			dropOffCustomerLocation || dropOffLocation
				? customerGroup.customer_group
				: customerGroup.company_customer_group
				? customerGroup.company_customer_group
				: customerGroup.customer_group

		const currentCustomerGroupPickup =
			pickUpCustomerLocation || pickUpLocation
				? customerGroup.customer_group
				: customerGroup.company_customer_group
				? customerGroup.company_customer_group
				: customerGroup.customer_group;

		const getTime = () => {
			const dropDay = currentCustomerGroup.delivery_days.find(day =>
				// console.log(day, 'jb')
				day.delivery_time_ranges
					? day.delivery_time_ranges.find(range => range.id === doneOrder.pickup_time_range_id)
					: null,
			)
			const dropTime = dropDay.delivery_time_ranges
				? dropDay.delivery_time_ranges.find(range => range.id === doneOrder.pickup_time_range_id)
				: null

			const pickDay = currentCustomerGroupPickup.delivery_days.find(day =>
				day.delivery_time_ranges
					? day.delivery_time_ranges.find(range => range.id === doneOrder.delivery_time_range_id)
					: null,
			)
			const pickTime = pickDay.delivery_time_ranges
				? pickDay.delivery_time_ranges.find(range => range.id === doneOrder.delivery_time_range_id)
				: null

			return { dropDay, dropTime, pickDay, pickTime }
		}

		return order ? (
			<View style={styles.container}>
				<View style={styles.row}>
					<Text style={styles.header}>
						<Translate value="BASKET_orderConfirmation_adress" />
					</Text>
				</View>
				<View style={styles.addressView}>
					<Text style={styles.label}>
						<Translate value="BASKET_orderConfirmation_dropAddress" />:
					</Text>
					{dropOffCustomerLocation ? (
						<Text
							style={styles.time}
						>{`${dropOffCustomerLocation.address}, ${dropOffCustomerLocation.floor} floor, ${dropOffCustomerLocation.apartments} apartments`}</Text>
					) : (
						<Text style={styles.time}>{`${
							dropOffLocation
								? dropOffLocation.address
								: user.company
								? user.company.location.address
								: null
						}`}</Text>
					)}
				</View>
				<View style={styles.addressView}>
					<Text style={styles.label}>
						<Translate value="BASKET_orderConfirmation_pickAddress" />:
					</Text>
					{pickUpCustomerLocation ? (
						<Text
							style={styles.time}
						>{`${pickUpCustomerLocation.address}, ${pickUpCustomerLocation.floor} floor, ${pickUpCustomerLocation.apartments} apartments`}</Text>
					) : (
						<Text style={styles.time}>{`${
							pickUpLocation
								? pickUpLocation.address
								: user.company
								? user.company.location.address
								: null
						}`}</Text>
					)}
				</View>
				{doneOrder.pick_up_time && doneOrder.pickup_time_range.hour_from ? (
					<View style={styles.addressView}>
						<Text style={styles.label}>
							<Translate value="BASKET_orderCompletion_dropOffLabel" />:
						</Text>
						<Text style={styles.time}>{`${convertDate(doneOrder.pick_up_time)} from ${
							doneOrder.pickup_time_range.hour_from
						} to ${doneOrder.pickup_time_range.hour_to}`}</Text>
					</View>
				) : null}
				{doneOrder.delivery_time && doneOrder.delivery_time_range.hour_from ? (
					<View style={styles.addressView}>
						<Text style={styles.label}>
							<Translate value="BASKET_orderCompletion_pickUpLabel" />:
						</Text>
						<Text style={styles.time}>{`${convertDate(doneOrder.delivery_time)} from ${
							doneOrder.delivery_time_range.hour_from
						} to ${doneOrder.delivery_time_range.hour_to}`}</Text>
					</View>
				) : null}
			</View>
		) : null
	}
}

export default AddressView
