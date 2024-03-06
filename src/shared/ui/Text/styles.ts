import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  text: {
    letterSpacing: 1,
  },
  xs: {
    fontSize: 16,
  },
  l: {
    fontSize: 24,
  },
  xl: {
    fontSize: 30,
  },
  bold: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
  primary: {
    color: variables.primaryColor,
  },
  secondary: {
    color: variables.secondaryColor,
  },
  white: {
    color: variables.colorWhite,
  },
});
