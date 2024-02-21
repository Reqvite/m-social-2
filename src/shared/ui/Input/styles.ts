import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  containerWithAddon: {
    position: "relative",
  },
  input: {
    color: variables.primaryColor,
    height: 50,
    padding: 15,
    fontSize: 16,
    borderStyle: "solid",
    borderColor: variables.borderColor,
  },
  default: {
    backgroundColor: variables.bgSecondary,
    borderWidth: 2,
    borderRadius: 8,
  },
  underline: {
    backgroundColor: variables.bgPrimary,
    borderBottomWidth: 2,
  },
  withButton: {
    borderWidth: 2,
    backgroundColor: variables.bgSecondary,
    borderRadius: 50,
  },
  focusedInput: {
    borderColor: variables.accentColor,
  },
  leftAddon: {
    position: "absolute",
    zIndex: 10,
    top: 10,
    left: 0,
  },
  inputWithAddon: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    position: "absolute",
    zIndex: 10,
    top: 10,
    right: 10,
  },
});
