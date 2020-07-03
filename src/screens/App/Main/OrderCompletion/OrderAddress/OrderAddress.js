/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'

import { View, Text } from 'react-native'

import { Input, Label, NavigationLink } from '../../../../../components/Registration/components'
import Translate from '@app/translations'

import { colors } from '../../../../../styles'

import styles from './styles'

class OrderAddress extends Component {
	render() {
		const {
			isAddressSame,
			onClear,
			onChange,
			address,
			houseNumber,
			floorNumber,
			postalNumber,
			onAddCustomerLocation,
			onSelectLocation,
			dropOffCustomerLocation,
			pickUpCustomerLocation,
			dropOffLocation,
			pickUpLocation,
			user,
		} = this.props

		return isAddressSame ? (
			<>
				<View style={styles.dropTitleView}>
					<Text style={styles.dropTitleText}><Translate value="BASKET_orderCompletion_dropOff" /></Text>
				</View>
				{dropOffCustomerLocation || dropOffLocation || user.company ? (
					<View style={styles.inputView}>
						<Text style={[{ color: colors.gray }]}>
							{dropOffCustomerLocation
								? dropOffCustomerLocation.address
								: dropOffLocation
								? dropOffLocation.address
								: user.company
								? user.company.location.address
								: null}
						</Text>
					</View>
				) : null}
				<View style={styles.dropTitleView}>
					<Text>
					<Translate value="BASKET_orderCompletion_pleaseChoose" />{' '}
						<NavigationLink
							color={colors.green}
							linkTo={() => {
								onAddCustomerLocation('both')
							}}
						>
							<Translate value="BASKET_orderCompletion_chooseAddressLink" />
						</NavigationLink>{' '}
						<Translate value="BASKET_orderCompletion_addressChoice" />{' '}
						<NavigationLink
							linkTo={() => {
								onSelectLocation('both')
							}}
							color={colors.green}
						>
							<Translate value="BASKET_orderCompletion_selectStoreLink" />
						</NavigationLink>
					</Text>
				</View>
			</>
		) : (
			<>
				<View style={styles.dropTitleView}>
					<Text style={styles.dropTitleText}>Drop-off</Text>
				</View>
				{dropOffCustomerLocation || dropOffLocation || user.company ? (
					<View style={styles.inputView}>
						<Text style={[{ color: colors.gray }]}>
							{dropOffCustomerLocation
								? dropOffCustomerLocation.address
								: dropOffLocation
								? dropOffLocation.address
								: user.company
								? user.company.location.address
								: null}
						</Text>
					</View>
				) : null}
				<View style={styles.dropTitleView}>
					<Text>
					<Translate value="BASKET_orderCompletion_pleaseChoose" />{' '}
						<NavigationLink
							color={colors.green}
							linkTo={() => {
								onAddCustomerLocation('drop')
							}}
						>
							<Translate value="BASKET_orderCompletion_chooseAddressLink" />
						</NavigationLink>{' '}
						<Translate value="BASKET_orderCompletion_addressChoice" />{' '}
						<NavigationLink
							linkTo={() => {
								onSelectLocation('drop')
							}}
							color={colors.green}
						>
							<Translate value="BASKET_orderCompletion_selectStoreLink" />
						</NavigationLink>
					</Text>
				</View>
				<View style={styles.dropTitleView}>
					<Text style={styles.dropTitleText}>Pick-up</Text>
				</View>
				{pickUpCustomerLocation || pickUpLocation || user.company ? (
					<View style={styles.inputView}>
						<Text style={[{ color: colors.gray }]}>
							{pickUpCustomerLocation
								? pickUpCustomerLocation.address
								: `${
										pickUpLocation
											? pickUpLocation.address
											: user.company
											? user.company.location.address
											: null
								  }`}
						</Text>
					</View>
				) : null}
				<View style={styles.dropTitleView}>
					<Text>
					<Translate value="BASKET_orderCompletion_pleaseChoose" />{' '}
						<NavigationLink
							color={colors.green}
							linkTo={() => {
								onAddCustomerLocation('pick')
							}}
						>
							<Translate value="BASKET_orderCompletion_chooseAddressLink" />
						</NavigationLink>{' '}
						<Translate value="BASKET_orderCompletion_addressChoice" />{' '}
						<NavigationLink
							linkTo={() => {
								onSelectLocation('pick')
							}}
							color={colors.green}
						>
							<Translate value="BASKET_orderCompletion_selectStoreLink" />
						</NavigationLink>
					</Text>
				</View>
			</>
		)
	}
}

export default OrderAddress
