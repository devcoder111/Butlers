import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const NotificationListHeader = ({title, subtitle}) => {
    
	return (
		<View style={styles.headerContainer}>
            <Text style={styles.headerName}>{title}</Text>
            <Text style={styles.description}>{subtitle}</Text>
		</View>
	)
}

export default NotificationListHeader
