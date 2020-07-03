import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as registrationActions } from "../../../../../redux/registration";

import InitialsView from "./InitialsView";

class InitialsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      isAccepted: false
    };
  }

  onClear = text => {
    this.setState({ [text]: "" });
  };

  onChange = name => {
    return text => {
      this.setState({ [name]: text });
    };
  };

  onCondition = () => {
    const { navigation } = this.props;
    navigation.navigate("ConditionData");
  };

  toggleSwitch = value => {
    const { [value]: val } = this.state;
    console.log([value])
    return () => this.setState({ [value]: !val });
  };

  forwardTo = () => {
    const { navigation, actions } = this.props;
    const { firstName, lastName } = this.state;
    const routeTo = navigation.state.params.route;
    console.log('routoTo ' , routeTo);
    actions.addInitialsRequest({ firstName, lastName });
    navigation.navigate(routeTo);
  };

  render() {
    const { firstName, lastName, isAccepted } = this.state;
    const { navigation } = this.props;

    return (
      <InitialsView
        onClear={this.onClear}
        onChange={this.onChange}
        forwardTo={this.forwardTo}
        navigation={navigation}
        firstName={firstName}
        lastName={lastName}
        onCondition={this.onCondition}
        toggleSwitch={this.toggleSwitch}
        isAccepted={isAccepted}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...registrationActions
    },
    dispatch
  )
});
export default connect(null, mapDispatchToProps)(InitialsContainer);
