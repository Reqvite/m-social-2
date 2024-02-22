import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  img: {
    alignSelf: "center",
    width: "100%",
    height: 240,
    borderRadius: variables.primaryBorderRadius,
  },
  title: {
    color: variables.primaryColor,
    marginTop: 8,
  },
  box: { flexDirection: "row", gap: 20 },
  boxItem: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  boxItemRight: {
    marginLeft: "auto",
  },
  boxItemText: {
    color: variables.colorWhite,
    marginTop: 5,
  },
  locationText: {
    color: variables.colorWhite,
    textDecorationLine: "underline",
  },
});
