import React from 'react';
import { Switch, View } from 'react-native';

import {colors} from '../../styles'
import styles from './styles'

class CustomSwitch extends React.Component {
  state = {switchValue: this.props.initialValue}

  toggleSwitch = (value) => {
      this.setState({switchValue: value})
      this.props.onChangeInput({value, name: this.props.name})
   }
  render() {
    return (
      <View style={styles.container}>
          <Switch
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}
          trackColor = {{true: colors.green}}
          />
      </View>
    );  
  } 
}

export default CustomSwitch;