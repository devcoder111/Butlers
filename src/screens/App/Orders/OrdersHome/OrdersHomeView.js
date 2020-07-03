import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { NavigationEvents } from "react-navigation";
import Title from "../../../../components/Registration/components/Title/Title";
import OrdersListItem from "./OrdersListItem/OrdersListItem";
import AnimatedClock from "../../../../components/AnimatedClock/AnimatedClock";
import Translate from '@app/translations'

import styles from "./styles";
import { colors } from "../../../../styles";

const OrdersHomeView = ({
  orders,
  navigation,
  types,
  location,
  getLocation,
  isOrdersLoading,
  addOrderId,
  user,
  onNotifyStore,
  getOrdersOnFocus,
  customerGroup,
}) => {
  const currentOrders = [...orders];
  const fakeOrder = { id: 0 };
  currentOrders.push(fakeOrder);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <NavigationEvents
          onDidFocus={() => {
            getOrdersOnFocus();
          }}
        />
        <Title color="#1E272E"><Translate value="MY_ORDERS_heading" /></Title>
        {isOrdersLoading ? (
          <View style={styles.loaderContainer}>
            <AnimatedClock color={colors.green} />
          </View>
        ) : (
          <View>
            <FlatList
              style={styles.ordersList}
              data={currentOrders}
              renderItem={({ item }) => (
                <OrdersListItem
                  item={item}
                  navigation={navigation}
                  types={types}
                  location={location}
                  getLocation={getLocation}
                  addOrderId={addOrderId}
                  user={user}
                  onNotifyStore={onNotifyStore}
                  customerGroup={customerGroup}
                />
              )}
              keyExtractor={(item) => item.id}
            />
            {getLocation()}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OrdersHomeView;
