import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderBox: {
    height: 25,
  },
  commentsList: {
    gap: 8,
    paddingTop: 20,
    paddingBottom: 300,
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
    marginBottom: 10,
  },
  box: {
    backgroundColor: variables.bgSecondary,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
