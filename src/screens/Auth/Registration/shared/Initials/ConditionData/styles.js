import { StyleSheet } from "react-native";

import { colors } from "../../../../../../styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    position: "relative",
    justifyContent: "flex-start"
  },
  sectionMarginTop: {
    marginTop: 40
  },
  subtitle: {
    marginTop: 20
  }
});
