import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import OrderConfirmationView from "./OrderConfirmationView";

import { getTotalAmount } from "../../../../selectors/basket";

import { actions as profileActions } from "../../../../redux/profile";
import { actions as basketActions } from "../../../../redux/basket";
import { actions as ordersActions } from "../../../../redux/orders";
import { actions as tailoringActions } from "../../../../redux/tailoring";

class OrderConfirmationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getOrdersRequest();
  }

  forwardTo = () => {
    const { navigation, doneOrder, actions, cards } = this.props;
    this.setModalVisible();
    const card = cards.find((item) => item.is_default === 1);
    const config = {
      order_id: doneOrder.id,
      card_id: card.id,
    };
    actions.paymentWithSavedCardRequest(config);
    actions.cleanBasketRequest();
    actions.cleanTailoringRequest();
    navigation.navigate("MainScreen");
  };

  confirm = () => {
    // const { actions, basket, order, cards } = this.props
    // const testArr = basket.map(item => {
    // 	return {
    // 		service_id: item.id,
    // 		material: 'test',
    // 		color: 'white',
    // 		count: item.count,
    // 	}
    // })
    // console.log(cards)

    // actions.createOrderRequest({ order_items: testArr, ...order })
    this.setModalVisible();
  };

  setModalVisible = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  };

  static navigationOptions = {
    header: null,
  };

  render() {
    const {
      navigation,
      basket,
      order,
      doneOrder,
      cards,
      getCardsLoading,
      total,
      customerLocations,
      butlersLocations,
      customerGroup,
      updateOrderLoading,
      user,
    } = this.props;
    const { modalVisible } = this.state;
    return (
      <OrderConfirmationView
        setModalVisible={this.setModalVisible}
        modalVisible={modalVisible}
        forwardTo={this.forwardTo}
        navigation={navigation}
        basket={basket}
        order={order}
        confirm={this.confirm}
        doneOrder={doneOrder}
        cards={cards}
        getCardsLoading={getCardsLoading}
        total={total}
        customerLocations={customerLocations}
        butlersLocations={butlersLocations}
        customerGroup={customerGroup}
        updateOrderLoading={updateOrderLoading}
        user={user}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  order: state.orders.order,
  basket: state.basket.basket,
  doneOrder: state.orders.doneOrder,
  createOrderLoading: state.orders.createOrderLoading,
  cards: state.profile.cards,
  card: state.profile.card,
  getCardsLoading: state.profile.getCardsLoading,
  total: getTotalAmount(state),
  customerLocations: state.locations.getSavedLocationResponse,
  butlersLocations: state.locations.locations,
  customerGroup: state.profile.getCustomerGroupResponse,
  updateOrderLoading: state.orders.updateOrderLoading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      ...profileActions,
      ...basketActions,
      ...ordersActions,
      ...tailoringActions,
    },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderConfirmationContainer);
