import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
  },
  active: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  inactive: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: "#1E272E",
    borderWidth: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  input: {
    width: "100%",
    color: "#1E272E",
    fontSize: 16,
    fontWeight: "300",
  },
});
