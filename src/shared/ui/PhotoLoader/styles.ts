import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: 300,
  },
  preview: {
    width: "100%",
    height: "100%",
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: variables.bgSecondary,
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    right: -15,
    bottom: 14,
  },
});
