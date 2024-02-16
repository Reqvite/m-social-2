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
    padding: 16,
    backgroundColor: variables.bgPrimary,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    gap: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 33,
  },
  button: {
    marginTop: 43,
  },
});
