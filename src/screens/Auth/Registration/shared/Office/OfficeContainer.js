import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as registrationActions } from "../../../../../redux/registration";

import OfficeView from "./OfficeView";

class OfficeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyId: "",
      modalVisible: false,
    };
  }

  onClear = () => {
    this.setState({ companyId: "" });
  };

  onChange = (text) => {
    this.setState({ companyId: text });
  };

  onSwitch = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  };

  forwardTo = () => {
    const { navigation, actions } = this.props;
    const { companyId } = this.state;
    const routeTo = navigation.state.params.route;
    actions.addCompanyIdRequest(companyId);
    navigation.navigate(routeTo);
  };

  render() {
    const { companyId, modalVisible } = this.state;
    const { navigation } = this.props;
    const routeTo = navigation.state.params.route;

    return (
      <OfficeView
        onClear={this.onClear}
        onChange={this.onChange}
        onSwitch={this.onSwitch}
        forwardTo={this.forwardTo}
        navigation={navigation}
        routeTo={routeTo}
        companyId={companyId}
        modalVisible={modalVisible}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  checkOfficeCodeResponse: state.registration.checkOfficeCodeResponse,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      ...registrationActions,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(OfficeContainer);
