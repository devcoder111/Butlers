/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
// import { getTailoringArray } from "../../../../../selectors/tailoring";

import { actions as tailoringActions } from "../../../../../redux/tailoring";

import TailoringAds from "./TailoringAds";

class TailoringAdsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitClean = () => {
    const { actions, navigation } = this.props;
    actions.cleanTailoringRequest();
    navigation.navigate("Main");
  };

  rejectClean = () => {
    const { actions, navigation } = this.props;
    actions.cleanTailoringRequest();
    navigation.navigate("TailoringLast");
  };

  render() {
    const { navigation } = this.props;
    return (
      <TailoringAds
        navigation={navigation}
        submitClean={this.submitClean}
        rejectClean={this.rejectClean}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  //   tailoring: getTailoringArray(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      ...tailoringActions,
    },
    dispatch
  ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TailoringAdsContainer);
