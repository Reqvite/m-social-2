import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  form: {
    marginTop: 20,
    gap: 15,
  },
  button: {
    marginTop: 30,
  },
  deleteButton: {
    alignSelf: "center",
    width: 60,
    height: 45,
    borderRadius: 20,
    backgroundColor: variables.grayColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
