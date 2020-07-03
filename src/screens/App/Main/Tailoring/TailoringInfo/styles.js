import { StyleSheet, Dimensions } from "react-native";

import { colors } from "../../../../../styles";

const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  bar: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
    paddingHorizontal: 20,
    color: colors.gray,
  },
  slider: {
    paddingHorizontal: 10,
    height: 150,
    minHeight: 150,
    maxHeight: 150,
  },
  slide: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  slideTouch: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  iconWrap: {
    width: 90,
    height: 90,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 5,
    marginTop: 20,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "400",
    paddingBottom: 20,
    color: "#1E272E",
  },
  forwardView: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 20,
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  active: {
    backgroundColor: colors.green,
  },
  inactive: {
    backgroundColor: "#bbb",
  },
  activeText: {
    fontWeight: "600",
  },
  inactiveText: {
    fontWeight: "300",
  },
  loaderContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: deviceWidth,
    marginLeft: -10,
  },
  spinnerWrap: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  loaderContainerWithPadding: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: deviceWidth,
    marginLeft: -20,
  },
  markerSection: {
    margin: 20,
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    borderTopColor: colors.gray,
    borderTopWidth: 1,
    position: "relative",
  },
  DraggableView: {
    position: "absolute",
    top: "50%",
    width: "100%",
  },
  animatedComments: {
    borderTopWidth: 1,
  },
});
