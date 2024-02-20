import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  box: {
    paddingTop: 32,
    paddingBottom: 42,
    padding: 16,
    backgroundColor: variables.bgPrimary,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  boxTopBiggerPadding: {
    paddingTop: 92,
  },
  form: {
    gap: 10,
  },
  title: {
    color: variables.primaryColor,
    marginTop: 20,
    marginBottom: 33,
  },
  button: {
    marginTop: 43,
  },
  photoLoader: {
    position: "absolute",
    top: -40,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  link: {
    marginTop: 16,
    color: variables.linkColor,
  },
});
