import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: variables.accentColor,
    borderRadius: 20,
    height: 51,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  clear: {
    backgroundColor: "transparent",
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  withIcon: {
    width: 34,
    height: 34,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: variables.accentColorLight,
  },
  buttonClearPressed: {
    color: variables.accentColor,
  },
  text: {
    textAlign: "center",
    color: variables.colorWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
});
