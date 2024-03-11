import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  commentsBox: {
    gap: 10,
    display: "flex",
    alignItems: "flex-start",
  },
  container: {
    flexDirection: "row",
    gap: 10,
  },
  isUserComment: {
    alignItems: "flex-end",
  },
  box: {
    width: "70%",
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
