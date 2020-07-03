/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform } from 'react-native'

import { bindActionCreators } from 'redux'
import OrderCompletionView from './OrderCompletionView'

import { actions as profileActions } from '../../../../redux/profile'
import { actions as ordersActions } from '../../../../redux/orders'
import {
	convertWeekDay,
	subtractDate,
	addDays,
	convertWeekDayNumber,
} from '../../../../helpers/time'

class OrderCompletionContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: props.user.first_name || '',
			lastName: props.user.last_name || '',
			address: '',
			houseNumber: '',
			floorNumber: '',
			postalNumber: '',
			isAddressSame: true,
			isExpress: false,
			dropOffDate: this.findNearestDate('is_delivery').nearestDate,
			dropOffTime: this.findNearestDate('is_delivery').nearestRange,
			pickUpDate: this.findNearestDate('is_pickup').nearestDate,
			pickUpTime: this.findNearestDate('is_pickup').nearestRange,
			mode: 'date',
			showDropOffDate: false,
			showDropOffTime: false,
			showPickUpDate: false,
			showPickUpTime: false,
			pickup_customer_location_id: false,
			delivery_customer_location_id: false,
			dropRanges: [],
			pickRanges: [],
			selectedDropRange: this.findNearestDate('is_delivery').rangeId,
			selectedPickRange: this.findNearestDate('is_pickup').rangeId,
			addressesAdded: false,
			datesError: false,
		}
	}

	componentDidMount() {
		const { actions } = this.props
		actions.getCardsRequest()
		actions.getCustomerGroupRequest()
		actions.getOrdersRequest()
		this.checkLocationOnFocus()
	}

	findNearestDate = (picker, address) => {
		const { customerGroup, customerLocations, navigation, butlersLocations } = this.props
		const dropAddress = navigation.getParam('drop', false)
		const dropStore = navigation.getParam('dropStoreLoc', false)
		const pickAddress = navigation.getParam('pick', false)
		const pickStore = navigation.getParam('pickStoreLoc', false)

		const dropOffCustomerLocation = customerLocations.find(el => el.id === address? address.dropAddress: dropAddress)
		const dropOffLocation = butlersLocations.find(el => el.id === address? address.dropStore:dropStore)
		const pickUpCustomerLocation = customerLocations.find(el => el.id === address? address.pickAddress:pickAddress)
		const pickUpLocation = butlersLocations.find(el => el.id === address? address.pickStore:pickStore)

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
				: customerGroup.customer_group

		const currentGroup =
			picker === 'is_delivery' ? currentCustomerGroup : currentCustomerGroupPickup

		const currentDate =
			picker === 'is_delivery'
				? new Date()
				: addDays(this.findNearestDate('is_delivery').nearestDate, 1)
		const currentWeekDay = convertWeekDayNumber(currentDate)
		const nextActiveDay =
			1 +
			currentGroup.delivery_days
				.slice(currentWeekDay)
				.concat(currentGroup.delivery_days.slice(0, currentWeekDay))
				.findIndex(el => {
					const range = el.delivery_time_ranges.filter(item => {
						return item[picker] === 1
					})
					return el.is_active === 1 && el.delivery_time_ranges.length > 0 && range.length > 0
				})
		const nearestDate = addDays(currentDate, nextActiveDay)
		const nearestWeekDayNum = convertWeekDayNumber(nearestDate)
		const dayData = currentGroup.delivery_days.filter(el => {
			return el.day_number === +nearestWeekDayNum
		})
		const currentRanges = dayData[0].delivery_time_ranges.filter(el => {
			return el[picker] === 1
		})
		const nearestRange = `from ${currentRanges[0].hour_from} to ${currentRanges[0].hour_to}`
		const rangeId = currentRanges[0].id
		console.log(rangeId)
		return { nearestDate, nearestRange, rangeId }
	}

	navigateTo = link => {
		const { navigation } = this.props
		navigation.navigate(link)
	}

	toggleSwitch = value => {
		const { [value]: val } = this.state
		return () => this.setState({ [value]: !val })
	}

	forwardTo = () => {
		const { navigation, actions, savedComment, doneOrder, user } = this.props
		const { selectedPickRange, selectedDropRange, dropOffDate, pickUpDate, isExpress, isAddressSame } = this.state
		const allAddresses = {}
		const bonus_id = navigation.getParam('bonus_id', 0)
		const pick = navigation.getParam('pick', false)
		const drop = navigation.getParam('drop', false)
		const pickStore = navigation.getParam('pickStoreLoc', false)
		const dropStore = navigation.getParam('dropStoreLoc', false)
		const orderId = doneOrder.order ? doneOrder.order.id : doneOrder.id
		const data = {
			comment: savedComment,
			is_express_delivery: isExpress,
			id: orderId,
		}
		if(isAddressSame){
			allAddresses.drop = drop
			allAddresses.pick = drop
			allAddresses.dropStore = dropStore
			allAddresses.pickStore = dropStore
		} else{
			allAddresses.drop = drop
			allAddresses.pick = pick
			allAddresses.dropStore = dropStore
			allAddresses.pickStore = pickStore
		}
		if (bonus_id > 0) {
			data.bonus_id = bonus_id
		}
		if (allAddresses.dropStore) {
			data.pickup_location_id = allAddresses.dropStore
		} else if (allAddresses.drop) {
			data.pickup_customer_location_id = allAddresses.drop
			data.pick_up_time = dropOffDate
			data.pickup_time_range_id = selectedDropRange
		} else if (user.company) {
			data.pickup_location_id = user.company.location_id
			data.pick_up_time = dropOffDate
			data.pickup_time_range_id = selectedDropRange
		}

		if (allAddresses.pickStore) {
			data.delivery_location_id = allAddresses.pickStore
		} else if (allAddresses.pick) {
			data.delivery_customer_location_id = allAddresses.pick
			data.delivery_time = pickUpDate
			data.delivery_time_range_id = selectedPickRange
		} else if (user.company) {
			data.delivery_location_id = user.company.location_id
			data.delivery_time = pickUpDate
			data.delivery_time_range_id = selectedPickRange
		}
		console.log(data, 'data')
		actions.addInfoToOrderRequest(data)
		actions.updateOrderRequest(data)
		actions.getOrdersRequest()
		navigation.navigate('OrderConfirmation')
	}

	onClear = name => {
		return () => this.setState({ [name]: '' })
	}

	onChange = name => {
		return text => this.setState({ [name]: text })
	}

	onChangeSelect = (name, itemValue, itemIndex) => {
		const { pickRanges, dropRanges } = this.state
		this.setState({ [name]: itemValue })
		if (name === 'dropOffTime') {
			this.setState({ selectedDropRange: dropRanges[itemIndex].id })
		} else if (name === 'pickUpTime') {
			this.setState({ selectedPickRange: pickRanges[itemIndex].id })
		}
	}

	choosePicker = (mode, name) => {
		return () => this.show(mode, name)
	}

	onModalChange = value => {
		return text => this.setState({ [value]: text.label })
	}

	validateDate = (date, custGroup) => {
		this.validateDateDifference(custGroup)
		const weekDays = {
			monday: 1,
			tuesday: 2,
			wednesday: 3,
			thursday: 4,
			friday: 5,
			saturday: 6,
			sunday: 7,
		}
		const disableDays = custGroup.delivery_days.filter(el => {
			return el.is_active === 0
		})
		const currentWeekDay = convertWeekDay(date)
		const numberOfWeekDay = weekDays[currentWeekDay.toLowerCase()]
		return disableDays.some(el => el.day_number === numberOfWeekDay)
	}

	setDate = (value, name) => {
		return (event, d) => {
			const { customerGroup, customerLocations, navigation, butlersLocations } = this.props
			const dropAddress = navigation.getParam('drop', false)
			const dropStore = navigation.getParam('dropStoreLoc', false)
			const pickAddress = navigation.getParam('pick', false)
			const pickStore = navigation.getParam('pickStoreLoc', false)

			const dropOffCustomerLocation = customerLocations.find(el => el.id === dropAddress)
			const dropOffLocation = butlersLocations.find(el => el.id === dropStore)
			const pickUpCustomerLocation = customerLocations.find(el => el.id === pickAddress)
			const pickUpLocation = butlersLocations.find(el => el.id === pickStore)

			const currentCustomerGroup =
				dropOffCustomerLocation || dropOffLocation
					? customerGroup.customer_group
					: customerGroup.company_customer_group
					? customerGroup.company_customer_group
					: customerGroup.customer_group
			// const currentCustomerGroupPickup =
			//   pickUpCustomerLocation || pickUpLocation
			//     ? customerGroup.customer_group
			//     : customerGroup.company_customer_group
			//     ? customerGroup.company_customer_group
			//     : customerGroup.customer_group;
			const currentWeekDay = convertWeekDay(d)
			const weekDays = {
				monday: 1,
				tuesday: 2,
				wednesday: 3,
				thursday: 4,
				friday: 5,
				saturday: 6,
				sunday: 7,
			}
			const numberOfWeekDay = weekDays[currentWeekDay.toLowerCase()]
			const dayOption = currentCustomerGroup.delivery_days.find(
				item => item.day_number === numberOfWeekDay,
			)
			// const dayOptionPickup = currentCustomerGroupPickup.delivery_days.find(
			//   (item) => item.day_number === numberOfWeekDay
			// );

			if (name === 'showPickUpDate') {
				this.setState({
					pickRanges: dayOption.delivery_time_ranges.sort((a, b) => {
						// pickRanges: dayOptionPickup.delivery_time_ranges.sort((a, b) => {
						return a.hour_from - b.hour_from
					}),
				})
			} else if (name === 'showDropOffDate') {
				this.setState({
					dropRanges: dayOption.delivery_time_ranges.sort((a, b) => {
						return a.hour_from - b.hour_from
					}),
				})
			}
			const date = this.state[value]
			const dat = d || date
			this.setState({
				[name]: Platform.OS === 'ios',
				[value]: dat,
			})
		}
	}

	show = (mode, name) => {
		this.setState({
			[name]: true,
			mode,
		})
	}

	onAddCustomerLocation = target => {
		const { navigation, actions, doneOrder, user } = this.props
		const { isAddressSame } = this.state
		const allAddresses = {}
		const pick = navigation.getParam('pick', false)
		const drop = navigation.getParam('drop', false)
		const pickStore = navigation.getParam('pickStoreLoc', false)
		const dropStore = navigation.getParam('dropStoreLoc', false)
		const orderId = doneOrder.order ? doneOrder.order.id : doneOrder.id
		const data = {
			id: orderId,
		}
		if(isAddressSame){
			allAddresses.drop = drop
			allAddresses.pick = drop
			allAddresses.dropStore = dropStore
			allAddresses.pickStore = dropStore
		} else{
			allAddresses.drop = drop
			allAddresses.pick = pick
			allAddresses.dropStore = dropStore
			allAddresses.pickStore = pickStore
		}
		if (allAddresses.dropStore) {
			data.pickup_location_id = allAddresses.dropStore
		} else if (allAddresses.drop) {
			data.pickup_customer_location_id = allAddresses.drop
		} else if (user.company) {
			data.pickup_location_id = user.company.location_id
		}

		if (allAddresses.pickStore) {
			data.delivery_location_id = allAddresses.pickStore
		} else if (allAddresses.pick) {
			data.delivery_customer_location_id = allAddresses.pick
		} else if (user.company) {
			data.delivery_location_id = user.company.location_id
		}
		actions.updateOrderRequest(data)
		navigation.navigate('MySavedLocations', {
			location: target,
			isAddressSame,
		})
	}

	checkLocationOnFocus = () => {
		const { navigation, user } = this.props
		const {isAddressSame} = this.state
		const allAddresses = {}
		const pick = navigation.getParam('pick', false)
		const drop = navigation.getParam('drop', false)
		const pickStore = navigation.getParam('pickStoreLoc', false)
		const dropStore = navigation.getParam('dropStoreLoc', false)
		if(isAddressSame){
			allAddresses.drop = drop
			allAddresses.pick = drop
			allAddresses.dropStore = dropStore
			allAddresses.pickStore = dropStore
		} else{
			allAddresses.drop = drop
			allAddresses.pick = pick
			allAddresses.dropStore = dropStore
			allAddresses.pickStore = pickStore
		}
		const dropLocation = allAddresses.pick || allAddresses.pickStore
		const pickLocation = allAddresses.dropStore || allAddresses.drop
		if (user.company) {
			this.setState({ addressesAdded: true })
			console.log('company')
		}
		if (dropLocation || pickLocation) {
			this.setState({ addressesAdded: true })
			console.log(dropLocation)
			console.log(pickLocation)
		}
		this.setState({
			pickup_customer_location_id: allAddresses.pick,
			delivery_customer_location_id: allAddresses.drop,
			dropOffDate: this.findNearestDate('is_delivery', allAddresses).nearestDate,
			dropOffTime: this.findNearestDate('is_delivery', allAddresses).nearestRange,
			pickUpDate: this.findNearestDate('is_pickup', allAddresses).nearestDate,
			pickUpTime: this.findNearestDate('is_pickup', allAddresses).nearestRange,
			selectedDropRange: this.findNearestDate('is_delivery', allAddresses).rangeId,
			selectedPickRange: this.findNearestDate('is_pickup', allAddresses).rangeId,
		})
		console.log('DONE')
	}

	onSelectLocation = target => {
		const { navigation, actions, doneOrder, user } = this.props
		const { isAddressSame } = this.state
		const allAddresses = {}
		const pick = navigation.getParam('pick', false)
		const drop = navigation.getParam('drop', false)
		const pickStore = navigation.getParam('pickStoreLoc', false)
		const dropStore = navigation.getParam('dropStoreLoc', false)
		const orderId = doneOrder.order ? doneOrder.order.id : doneOrder.id
		const data = {
			id: orderId,
		}
		if(isAddressSame){
			allAddresses.drop = drop
			allAddresses.pick = drop
			allAddresses.dropStore = dropStore
			allAddresses.pickStore = dropStore
		} else{
			allAddresses.drop = drop
			allAddresses.pick = pick
			allAddresses.dropStore = dropStore
			allAddresses.pickStore = pickStore
		}
		if (allAddresses.dropStore) {
			data.pickup_location_id = allAddresses.dropStore
		} else if (allAddresses.drop) {
			data.pickup_customer_location_id = allAddresses.drop
		} else if (user.company) {
			data.pickup_location_id = user.company.location_id
		}

		if (allAddresses.pickStore) {
			data.delivery_location_id = allAddresses.pickStore
		} else if (allAddresses.pick) {
			data.delivery_customer_location_id = allAddresses.pick
		} else if (user.company) {
			data.delivery_location_id = user.company.location_id
		}
		actions.updateOrderRequest(data)
		navigation.navigate('StoreLocations', {
			location: target,
			isAddressSame,
		})
	}

	validateDateDifference = currentCustomerGroup => {
		const { dropOffDate, pickUpDate, isExpress } = this.state
		const deliveryDays = isExpress
			? currentCustomerGroup.express_delivery_days_count
			: currentCustomerGroup.delivery_days_count
		return subtractDate(dropOffDate, pickUpDate) < -deliveryDays
	}

	validatePastDate = picker => {
		const { dropOffDate, pickUpDate } = this.state
		const currentDate = new Date()
		if(picker === 'showDropOffDate'){
			return subtractDate(dropOffDate, currentDate) > 0
		} else return subtractDate(pickUpDate, currentDate) > 0
		// return subtractDate(dropOffDate, currentDate) > 0
	}

	static navigationOptions = {
		header: null,
	}

	render() {
		const {
			navigation,
			basket,
			customerGroup,
			orders,
			customerLocations,
			butlersLocations,
			user,
		} = this.props
		const {
			date,
			mode,
			show,
			isAddressSame,
			isExpress,
			firstName,
			lastName,
			address,
			houseNumber,
			floorNumber,
			dropOffDate,
			dropOffTime,
			pickUpDate,
			pickUpTime,
			postalNumber,
			showDropOffDate,
			showDropOffTime,
			showPickUpDate,
			showPickUpTime,
			pickup_customer_location_id,
			delivery_customer_location_id,
			dropRanges,
			pickRanges,
			addressesAdded,
			datesError,
		} = this.state
		const allAddresses = {}
		const pickAddress = navigation.getParam('pick', false)
		const dropAddress = navigation.getParam('drop', false)
		const pickStore = navigation.getParam('pickStoreLoc', false)
		const dropStore = navigation.getParam('dropStoreLoc', false)
		if(isAddressSame){
			allAddresses.dropAddress = dropAddress
			allAddresses.pickAddress = dropAddress
			allAddresses.dropStore = dropStore
			allAddresses.pickStore = dropStore
		} else{
			allAddresses.dropAddress = dropAddress
			allAddresses.pickAddress = pickAddress
			allAddresses.dropStore = dropStore
			allAddresses.pickStore = pickStore
		}
		return (
			<OrderCompletionView
				dropRanges={dropRanges}
				pickRanges={pickRanges}
				forwardTo={this.forwardTo}
				toggleSwitch={this.toggleSwitch}
				choosePicker={this.choosePicker}
				mode={mode}
				show={show}
				date={date}
				setDate={this.setDate}
				onChange={this.onChange}
				onClear={this.onClear}
				basket={basket}
				isAddressSame={isAddressSame}
				isExpress={isExpress}
				navigation={navigation}
				firstName={firstName}
				lastName={lastName}
				address={address}
				houseNumber={houseNumber}
				floorNumber={floorNumber}
				dropOffDate={dropOffDate}
				dropOffTime={dropOffTime}
				pickUpDate={pickUpDate}
				pickUpTime={pickUpTime}
				postalNumber={postalNumber}
				showDropOffDate={showDropOffDate}
				showDropOffTime={showDropOffTime}
				showPickUpDate={showPickUpDate}
				showPickUpTime={showPickUpTime}
				onModalChange={this.onModalChange}
				onChangeSelect={this.onChangeSelect}
				validateDate={this.validateDate}
				onAddCustomerLocation={this.onAddCustomerLocation}
				pick={pickup_customer_location_id}
				drop={delivery_customer_location_id}
				checkLocationOnFocus={this.checkLocationOnFocus}
				onSelectLocation={this.onSelectLocation}
				customerGroup={customerGroup}
				orders={orders}
				addressesAdded={addressesAdded}
				pickAddress={pickAddress}
				dropAddress={dropAddress}
				pickStore={pickStore}
				dropStore={dropStore}
				customerLocations={customerLocations}
				butlersLocations={butlersLocations}
				user={user}
				validateDateDifference={this.validateDateDifference}
				datesError={datesError}
				validatePastDate={this.validatePastDate}
				findNearestDate={this.findNearestDate}
				allAddresses={allAddresses}
			/>
		)
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
	savedComment: state.basket.comment,
	currentPromocode: state.basket.promocode,
	customerGroup: state.profile.getCustomerGroupResponse,
	doneOrder: state.orders.doneOrder,
	orders: state.orders.orders,
	customerLocations: state.locations.getSavedLocationResponse,
	butlersLocations: state.locations.locations,
	order: state.orders.order,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
			...ordersActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderCompletionContainer)
