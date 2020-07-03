import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { ScrollView } from 'react-native-gesture-handler'
import {
	Title,
	NavigationLink,
	ForwardButton,
	Input,
} from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import { actions as profileActions } from '../../../../../redux/profile'

import { colors } from '../../../../../styles'

import styles from './styles'

class NewChat extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			subject: '',
		}
	}

	onClear = name => {
		return () => this.setState({ [name]: '' })
	}

	onChange = name => {
		return text => this.setState({ [name]: text })
	}

	forwardTo = () => {
		const { navigation, actions } = this.props
		const { subject } = this.state
		const data = {
			subject,
		}
		actions.subjectChatRequest(subject)
		navigation.navigate('CurrentChat', data)
	}

	render() {
		const { navigation } = this.props
		const { subject } = this.state
		return (
			// <ScrollView>
			<SafeAreaView style={[styles.container, { flex: 1 }]}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<View>
					<Title color={colors.black}>Messages</Title>
					<Text style={styles.subtitle}>
						Butlers is ready to answer your questions. You can also find answers in our{' '}
						<NavigationLink linkTo={() => navigation.navigate('FAQ')}>FAQ</NavigationLink> and{' '}
						<NavigationLink linkTo={() => navigation.navigate('CleaningPractices')}>
							Cleaning Practices
						</NavigationLink>{' '}
					</Text>
					<Text style={styles.subtitle}>Subject:</Text>
					<View style={[styles.inputView]}>
						<Input
							color={colors.black}
							selectionColor={colors.black}
							onClear={this.onClear('subject')}
							value={subject}
							onChangeText={this.onChange('subject')}
						/>
					</View>
				</View>
				<View style={styles.forwardView}>
					<ForwardButton
						colorText={colors.white}
						backgroundColorText={colors.green}
						value
						forwardTo={this.forwardTo}
					/>
				</View>
			</SafeAreaView>
			// </ScrollView>sw
		)
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{
			...profileActions,
		},
		dispatch,
	),
})

export default connect(null, mapDispatchToProps)(NewChat)
