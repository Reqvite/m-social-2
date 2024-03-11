import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  commentsList: {
    gap: 5,
    paddingBottom: 30,
  },
  img: {
    marginBottom: 15,
    alignSelf: "center",
    width: "100%",
    height: 200,
    borderRadius: variables.primaryBorderRadius,
  },
  input: {
    borderRadius: 0,
    width: "100%",
    marginTop: 20,
  },
  box: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
