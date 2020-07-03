/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { actions as profileActions } from '../../../../redux/profile'
import { actions as locationsActions } from '../../../../redux/locations'

import MySavedLocations from './MySavedLocations'

class MySavedLocationsContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modalVisible: false,
			id: 0,
		}
	}

	componentDidMount() {
		const { actions } = this.props
		actions.getSavedLocationRequest()
	}

	setModalVisible = id => {
		const { modalVisible } = this.state
		this.setState({ modalVisible: !modalVisible, id })
	}

	onModalChange = item => {
		return text => {
			const { actions, navigation } = this.props
			if (text.label === 'Delete') {
				this.setModalVisible(item.id)
				// actions.deleteSavedLocationRequest(item.id)
				// setTimeout(() => {
				// 	actions.getSavedLocationRequest()
				// }, 500)
			} else if (text.label === 'Edit') {
				navigation.navigate('EditLocation', item)
			}
		}
	}

	deleteLocation = () => {
		const { actions } = this.props
		actions.deleteSavedLocationRequest(this.state.id)
		setTimeout(() => {
			actions.getSavedLocationRequest()
		}, 500)
	}

	onChooseLocation = id => {
		const { navigation } = this.props
		const isAddressSame = navigation.getParam('isAddressSame', false)
		const location = navigation.getParam('location', false)
		if (isAddressSame) {
			navigation.navigate('OrderCompletion', {
				drop: id,
				pick: id,
				pickStoreLoc: false,
				dropStoreLoc: false,
			})
		} else if (location === 'drop') {
			navigation.navigate('OrderCompletion', { drop: id, dropStoreLoc: false })
		} else if (location === 'pick') {
			navigation.navigate('OrderCompletion', { pick: id, pickStoreLoc: false })
		}
	}

	onChooseOffice = () => {
		const { navigation } = this.props
		const isAddressSame = navigation.getParam('isAddressSame', false)
		const location = navigation.getParam('location', false)
		if (isAddressSame) {
			navigation.navigate('OrderCompletion', {
				drop: false,
				pick: false,
				pickStoreLoc: false,
				dropStoreLoc: false,
			})
		} else if (location === 'drop') {
			navigation.navigate('OrderCompletion', { drop: false, dropStoreLoc: false })
		} else if (location === 'pick') {
			navigation.navigate('OrderCompletion', { pick: false, pickStoreLoc: false })
		}
	}

	render() {
		const { navigation, locations, user } = this.props
		const { modalVisible, id } = this.state
		const location = navigation.getParam('location', false)
		return (
			<MySavedLocations
				navigation={navigation}
				locations={locations}
				onModalChange={this.onModalChange}
				modalVisible={modalVisible}
				setModalVisible={this.setModalVisible}
				deleteLocation={this.deleteLocation}
				onChooseLocation={this.onChooseLocation}
				location={location}
				user={user}
				onChooseOffice={this.onChooseOffice}
			/>
		)
	}
}

const mapStateToProps = state => ({
	practicesEn: state.profile.appSettings.cleaning_practices_en,
	locations: state.locations.getSavedLocationResponse,
	user: state.auth.user,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
			...locationsActions,
		},
		dispatch,
	),
})

export default connect(mapStateToProps, mapDispatchToProps)(MySavedLocationsContainer)
