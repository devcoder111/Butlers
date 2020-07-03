import React, { PureComponent } from 'react'
import { FlatList, View } from 'react-native'

import Translate from '@app/translations'
import AboutListItem from './AboutListItem'

import styles from './styles'

// const DATA = [
// 	{
// 		id: 'terms0',
// 		title: <Translate value="PROFILE_termsOfUseHeading" />,
// 		icon: 'TermsOfUse',
// 		navigateTo: 'Terms',
// 	},
// 	{
// 		id: 'faq1',
// 		title: <Translate value="FAQs" />,
// 		icon: 'FAQ',
// 		navigateTo: 'FAQ',
// 	},
// 	{
// 		id: 'gdpr2',
// 		title: 'GDPR',
// 		icon: 'GDPR',
// 		navigateTo: 'GDPR',
// 	},
// 	{
// 		id: 'price3',
// 		title: <Translate value="PROFILE_PricelistHeading" />,
// 		icon: 'Pricelist',
// 		navigateTo: 'Pricelist',
// 	},
// 	{
// 		id: 'tutorial4',
// 		title: <Translate value="PROFILE_tutorialHeading" />,
// 		icon: 'AppTutorial',
// 		navigateTo: 'AppTutorial',
// 	},
// 	{
// 		id: 'contact5',
// 		title: <Translate value="PROFILE_contactInfoHeading" />,
// 		icon: 'ContactInfo',
// 		navigateTo: 'ContactInfo',
// 	},
// ]

class AboutList extends PureComponent {
	render() {
		const { navigate } = this.props.navigation
		const { serviceTypesWith } = this.props
		const DATA = [
			{
				id: 'terms0',
				title: <Translate value="PROFILE_termsOfUseHeading" />,
				icon: 'TermsOfUse',
				navigateTo: 'Terms',
				data: '',
			},
			{
				id: 'faq1',
				title: <Translate value="FAQs" />,
				icon: 'FAQ',
				navigateTo: 'FAQ',
				data: '',
			},
			{
				id: 'gdpr2',
				title: 'GDPR',
				icon: 'GDPR',
				navigateTo: 'GDPR',
				data: '',
			},
			{
				id: 'price3',
				title: <Translate value="PROFILE_PricelistHeading" />,
				icon: 'Pricelist',
				navigateTo: 'Pricelist',
				data: serviceTypesWith,
			},
			{
				id: 'tutorial4',
				title: <Translate value="PROFILE_tutorialHeading" />,
				icon: 'AppTutorial',
				navigateTo: 'AppTutorial',
				data: '',
			},
			{
				id: 'contact5',
				title: <Translate value="PROFILE_contactInfoHeading" />,
				icon: 'ContactInfo',
				navigateTo: 'ContactInfo',
				data: '',
			},
		]
		// eslint-disable-next-line react/destructuring-assignment
		const onNavigate = (navigateTo, data) => {
			navigate(navigateTo, data)
		}

		return (
			<View style={styles.wrap}>
				<FlatList
					data={DATA}
					renderItem={({ item }) => (
						<AboutListItem
							title={item.title}
							data={item.data}
							icon={item.icon}
							navigateTo={item.navigateTo}
							onNavigate={onNavigate}
						/>
					)}
					keyExtractor={item => item.id}
				/>
			</View>
		)
	}
}

export default AboutList
