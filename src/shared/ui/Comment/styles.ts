import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  box: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: variables.bgSecondaryLight,
    padding: 16,
  },
  img: {
    alignSelf: "center",
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  text: {
    color: variables.primaryColor,
  },
  date: {
    color: variables.grayColor,
  },
});
