/* eslint-disable no-plusplus */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Keyboard,
  UIManager,
  TextInput,
} from "react-native";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { actions as tailoringActions } from "../../../../../redux/tailoring";
import { actions as basketActions } from "../../../../../redux/basket";

import TailoringInfoView from "./TailoringInfoView";

const { State: TextInputState } = TextInput;

class TailoringInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      coordinates: [],
      shift: new Animated.Value(0),
      keyboardShow: false,
    };
  }

  handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get("window");
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(
      currentlyFocusedField,
      (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height;
        const fieldTop = pageY;
        const gap =
          windowHeight - keyboardHeight - (fieldTop + fieldHeight) - 40;
        if (gap >= 0) {
          return;
        }
        Animated.timing(this.state.shift, {
          toValue: gap,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }
    );
    this.setState({ keyboardShow: true });
  };

  handleKeyboardDidHide = () => {
    Animated.timing(this.state.shift, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    this.setState({ keyboardShow: false });
  };

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      "keyboardDidShow",
      this.handleKeyboardDidShow
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      "keyboardDidHide",
      this.handleKeyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  onChangeCoordinates = (x, y, index, id) => {
    const { coordinates } = this.state;
    const arr = { x, y, index, id };
    const data = [...coordinates];
    const indexOfArray = data.findIndex((el) => {
      return el.index === index;
    });
    if (indexOfArray >= 0) {
      data[indexOfArray].x = x;
      data[indexOfArray].y = y;
    } else data.push(arr);
    this.setState({ coordinates: data });
    console.log(coordinates);
  };

  changeCoordinates = () => {
    const { actions } = this.props;
    const { coordinates } = this.state;
    actions.addCoordinateRequest(coordinates);
  };

  onComment = (item, value, index) => {
    this.setState({ comments: value });
    const { actions } = this.props;
    const payload = {
      item,
      value,
      index,
    };
    actions.addCommentRequest(payload);
  };

  addMarker = (item, index) => {
    const { actions } = this.props;
    const config = {
      item,
      index,
    };
    actions.addMarkerRequest(config);
    this.forceUpdate();
  };

  deleteMarker = (item, index) => {
    const { actions } = this.props;
    const config = {
      item,
      index,
    };
    actions.deleteMarkerRequest(config);
    this.forceUpdate();
  };

  forwardTo = () => {
    const { actions, tailoring, navigation } = this.props;
    this.changeCoordinates();
    tailoring.forEach((item) => actions.addItemRequest(item));
    // actions.cleanTailoringRequest();
    navigation.navigate("TailoringAds");
  };

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation, tailoring, categories, types } = this.props;
    const { comments, coordinates, shift, keyboardShow } = this.state;
    return (
      <TailoringInfoView
        navigation={navigation}
        tailoring={tailoring}
        addMarker={this.addMarker}
        deleteMarker={this.deleteMarker}
        onComment={this.onComment}
        comments={comments}
        coordinates={coordinates}
        onChangeCoordinates={this.onChangeCoordinates}
        changeCoordinates={this.changeCoordinates}
        forwardTo={this.forwardTo}
        categories={categories}
        types={types}
        shift={shift}
        keyboardShow={keyboardShow}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  tailoring: state.tailoring.tailoringItems,
  categories: state.services.services,
  types: state.services.types,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      ...tailoringActions,
      ...basketActions,
    },
    dispatch
  ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TailoringInfoContainer);
