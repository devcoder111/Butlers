/* eslint-disable no-param-reassign */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { getTailoringArray } from '../../../../../selectors/tailoring'

import { actions as profileActions } from '../../../../../redux/profile'
import { actions as tailoringActions } from '../../../../../redux/tailoring'
import { actions as servicesActions } from '../../../../../redux/services'

import TailoringServiceView from './TailorinServiceView'

class TailoringServiceContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeCategory: 0,
			selectedCategoryError: false,
		}
	}

	forwardTo = () => {
		const { actions, navigation } = this.props
		actions.addTailoringItemsRequest()
		navigation.navigate('TailoringInfo')
	}

	setActiveCategory = id => {
		this.setState({ activeCategory: id })
	}

	addItem = item => {
		const { actions } = this.props
		actions.addTailoringRequest(item)
	}

	deleteItem = id => {
		const { actions } = this.props
		actions.deleteTailoringRequest(id)
	}

	getTypes = () => {
		const { actions } = this.props
		actions.getServiceTypesRequest()
	}

	getServices = id => {
		const { actions } = this.props
		actions.getServiceByIdRequest(id)
	}

	filterServices = async id => {
		const { actions } = this.props
		const data = actions.getServiceByIdRequest(id)
		return data
	}

	setSelectedCategoryErrorVisible = () => {
		this.setState({ selectedCategoryError: true })
	}

	setSelectedCategoryErrorHidden = () => {
		this.setState({ selectedCategoryError: false })
	}

	static navigationOptions = {
		header: null,
	}

	render() {
		const {
			navigation,
			basket,
			types,
			services,
			isServicesLoading,
			isTypesLoading,
			tailoring,
		} = this.props
		const { activeCategory, selectedCategoryError } = this.state
		return (
			<TailoringServiceView
				navigateTo={this.navigateTo}
				navigation={navigation}
				basket={basket}
				addItem={this.addItem}
				deleteItem={this.deleteItem}
				types={types}
				services={services}
				isServicesLoading={isServicesLoading}
				isTypesLoading={isTypesLoading}
				getServices={this.getServices}
				getTypes={this.getTypes}
				activeCategory={activeCategory}
				setActiveCategory={this.setActiveCategory}
				tailoring={tailoring}
				selectedCategoryError={selectedCategoryError}
				setSelectedCategoryErrorHidden={this.setSelectedCategoryErrorHidden}
				setSelectedCategoryErrorVisible={this.setSelectedCategoryErrorVisible}
				forwardTo={this.forwardTo}
			/>
		)
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
	types: state.services.types,
	services: state.services.service,
	tailoring: getTailoringArray(state),
	isServicesLoading: state.services.isServicesLoading,
	isTypesLoading: state.services.isTypesLoading,
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
			...tailoringActions,
			...servicesActions,
		},
		dispatch,
	),
})
export default connect(mapStateToProps, mapDispatchToProps)(TailoringServiceContainer)
