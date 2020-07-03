import React from 'react'
import { SafeAreaView, Text, TouchableWithoutFeedback, View, FlatList } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import Translate from '@app/translations'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Title, NavigationLink } from '../../../../../components/Registration/components'
import NavigationHeader from '../../../../../components/Profile/components/NavigationHeader'
import SubjectField from './SubjectField/SubjectField'

import { colors } from '../../../../../styles'

import styles from './styles'
import AddNew from '../../../../../components/Profile/components/AddNew'

const MessagesHomeView = ({ navigation, navigateTo, subjects }) => {
	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<NavigationHeader navigation={navigation} onAction={() => {}} />
				<Title color={colors.black}>
					<Translate value="PROFILE_messagesLink" />
				</Title>
				<Text style={styles.subtitle}>
					<Translate value="PROFILE_messages_text" />{' '}
					<NavigationLink linkTo={() => navigateTo('FAQ')}>FAQ</NavigationLink> and{' '}
					<NavigationLink linkTo={() => navigateTo('CleaningPractices')}>
						<Translate value="PROFILE_cleaningLink" />
					</NavigationLink>
				</Text>
				{subjects ? (
					<View>
						<Text style={[styles.subtitle, { fontWeight: 'bold', fontSize: 17, marginBottom: 15 }]}>
							Messages from Butlers
						</Text>
						<FlatList
							data={subjects.filter(item => !item.order_id)}
							renderItem={({ item }) => (
								<SubjectField
									item={item}
									navigation={navigation}
									subject={item.subject}
									messageNum="0"
								/>
							)}
							keyExtractor={item => item.id}
						/>
					</View>
				) : null}
				<AddNew title="Create new chat" icon="plus" navigation={navigation} navigateTo="NewChat" />
			</SafeAreaView>
		</ScrollView>
	)
}

export default MessagesHomeView
