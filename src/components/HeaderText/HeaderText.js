import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Title } from "../Registration/components";
import Translate from '@app/translations'

const HeaderText = props => {
    if (props.value != null) 
	return (
        <Title color="#525255">
            <Translate value={props.value}/>
        </Title>
    );
    else{
        return (<Title></Title>);
    }
    
}

export default HeaderText
