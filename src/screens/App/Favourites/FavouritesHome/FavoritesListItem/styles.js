import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    // alignItems: 'flex-start',
    justifyContent: "center",
    marginTop: 20,
    borderTopColor: "#ddd",
    borderTopWidth: 1
  },
  rowContainer: {
    // paddingTop: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  price: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // paddingRight: '25%',
    // marginLeft: 10,
    width: 80
  },
  priceText: {
    fontWeight: "400",
    fontSize: 13,
    paddingLeft: 5
  },
  category: {
    fontWeight: "400",
    fontSize: 20
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    width: 150
  },
  addContainer: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#1E272E",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  flex: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    display: "flex",
    flexDirection: "row"
  },
  sign: {
    fontSize: 20
  },
  center: {
    display: "flex",
    flexDirection: "row",
    width: "30%",
    justifyContent: "flex-start"
  },
  left: {
    display: "flex",
    flexDirection: "row",
    width: "65%",
    justifyContent: "space-between"
  },
  heart: {
    marginLeft: 10
  },
  marginRight: {
    marginRight: 5
  }
});
