import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

import Translate from '@app/translations'
import Touchable from '../../../../components/Touchable/Touchable'
import styles from './styles'

const TailoringHome = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.bottomWrap}>
				<ImageBackground
					source={require('../../../../assets/Tailoring.png')}
					style={{ width: '100%', height: 150 }}
				>
					<View style={styles.image}>
						<Text style={styles.header}>
							<Translate value="MAIN_tailoringHeading" />
						</Text>
					</View>
				</ImageBackground>
				<Text style={styles.text}>
					<Translate value="MAIN_tailoringPreviewText" />
				</Text>
				<Touchable
					containerStyle={styles.button}
					onPress={() => navigation.navigate('TailoringService')}
				>
					<Text style={styles.buttonText}>
						+ <Translate value="TailoringAddButton" />
					</Text>
				</Touchable>
			</View>
		</View>
	)
}

export default TailoringHome
