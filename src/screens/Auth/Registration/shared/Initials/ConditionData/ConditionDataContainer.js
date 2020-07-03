import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { getCards } from "../../../../../selectors/cards";

import { actions as profileActions } from "../../../../../redux/profile";
import { actions as chatActions } from "../../../../../redux/chat";

import ConditionData from "./ConditionData";

class ConditionDataContainer extends Component {
  constructor(props) {
    super(props);
    // const { navigation, messages } = this.props
    // const item = navigation.state.params
    // const generalMessages = messages.filter(el => {
    // 	return el.subject === item.subject
    // })
    // const orderMessages = messages.filter(el => {
    // 	return el.order_id === item.order_id
    // })
    // const currentMessages = item.order_id ? orderMessages : generalMessages
    this.state = {
      // clientMessage: '',
      // messageConst: '',
      // modalVisible: false,
      // openedMessage: 0,
      // allMess: currentMessages,
    };
  }

  componentDidMount() {
    // const { actions } = this.props;
    // actions.getMessagesRequest();
    // actions.getSubjectsRequest();
  }

  render() {
    const { navigation } = this.props;
    return <ConditionData navigation={navigation} />;
  }
}

const mapStateToProps = state => ({
  //   cards: getCards(state),
  //   user: state.auth.user,
  //   subject: state.profile.subjectChat,
  //   messages: state.profile.messages
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      //   ...profileActions,
      //   ...chatActions
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConditionDataContainer);
