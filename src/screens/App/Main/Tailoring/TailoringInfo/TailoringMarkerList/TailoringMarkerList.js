import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback, TextInput, Platform } from "react-native";

import Icon from "react-native-vector-icons/Feather";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./styles";
import { actions as profileActions } from "../../../../../../redux/profile";
import { placeholdersHandler } from "../../../../../../constants/translations/index";
import { ScrollView } from "react-native-gesture-handler";

class TailoringMarkerList extends Component {
  addMarkers = (item, index) => {
    const { addMarker } = this.props;
    addMarker(item, index);
    this.forceUpdate();
  };

  deleteMarkers = (item, index) => {
    const { deleteMarker } = this.props;
    deleteMarker(item, index);
    this.forceUpdate();
  };

  render() {
    const { item, onComment, index, user } = this.props;
    return (
      <View style={styles.column}>
        <View style={styles.item}>
          {item.marker ? (
            <TouchableWithoutFeedback
              onPress={() => {
                this.deleteMarkers(item, index);
              }}
            >
              <View style={[styles.active, { backgroundColor: item.color }]}>
                <Icon color="#fff" name="minus" size={25} />
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                this.addMarkers(item, index);
              }}
            >
              <View style={styles.inactive}>
                <Icon color="#1E272E" name="plus" size={25} />
              </View>
            </TouchableWithoutFeedback>
          )}
          <Text style={styles.title}>{item.service_name}</Text>
        </View>
        {item.marker ? (
          <TextInput
            style={(styles.input, { height: 55 })}
            {...this.props}
            multiline
            onChangeText={(value) => onComment(item, value, index)}
            placeholder={placeholdersHandler(
              user,
              "TAILORING_whatToDo_commentsLabel"
            )}
            placeholderTextColor="#1E272E"
            numberOfLines={Platform.OS === 'ios' ? null : 2}
            maxHeight={(Platform.OS === 'ios') ? 55 : null}
          />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      ...profileActions,
    },
    dispatch
  ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TailoringMarkerList);
