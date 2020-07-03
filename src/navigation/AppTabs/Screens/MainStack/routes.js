import React from "react";

import Main from "./MainTabs";

import MainTabsHeader from "../../../../components/MainTabsHeader/MainTabsHeaderContainer";
import CleaningService from "../../../../screens/App/Main/CleaningService";
import Basket from "../../../../screens/App/Main/Basket";
import TailoringService from "../../../../screens/App/Main/Tailoring/TailoringService/TailorinServiceContainer";
import TailoringInfo from "../../../../screens/App/Main/Tailoring/TailoringInfo/TailoringInfoContainer";
import TailoringFiles from "../../../../screens/App/Main/Tailoring/TailoringFiles/TailoringFilesContainer";
import TailoringAds from "../../../../screens/App/Main/Tailoring/TailoringAds/TailoringAdsContainer";
import TailoringLast from "../../../../screens/App/Main/Tailoring/TailoringLast/TailoringLastContainer";

import MainLayoutHOC from "../../../../hoc/MainLayoutHOC";
import AuthLayoutHOC from "../../../../hoc/AuthLayoutHOC";
import OrderCompletion from "../../../../screens/App/Main/OrderCompletion";
import OrderConfirmation from "../../../../screens/App/Main/OrderConfirmation";
import SearchProducts from "../../../../screens/App/Main/SearchProducts";

const Routes = {
  Main: {
    screen: Main,
  },
  Cleaning: {
    screen: CleaningService,
  },
  Basket: {
    screen: AuthLayoutHOC(Basket),
  },
  TailoringService: {
    screen: MainLayoutHOC(TailoringService),
    navigationOptions: () => {
      return {
        header: () => null,
      };
    },
  },
  TailoringInfo: {
    screen: MainLayoutHOC(TailoringInfo),
    navigationOptions: () => {
      return {
        header: () => null,
      };
    },
  },
  TailoringFiles: {
    screen: MainLayoutHOC(TailoringFiles),
    navigationOptions: () => {
      return {
        header: () => null,
      };
    },
  },
  TailoringAds: {
    screen: MainLayoutHOC(TailoringAds),
    navigationOptions: () => {
      return {
        header: () => null,
      };
    },
  },
  TailoringLast: {
    screen: MainLayoutHOC(TailoringLast),
    navigationOptions: () => {
      return {
        header: () => null,
      };
    },
  },
  OrderCompletion: {
    screen: AuthLayoutHOC(OrderCompletion),
  },
  OrderConfirmation: {
    screen: AuthLayoutHOC(OrderConfirmation),
  },
  SearchProducts: {
    screen: MainLayoutHOC(SearchProducts),
    navigationOptions: () => {
      return {
        header: () => null,
      };
    },
  },
};

export default Routes;
