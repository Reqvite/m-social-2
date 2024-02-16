import { StyleSheet, View } from "react-native";

import { variables } from "@/app/styles/variables";

export const PhotoLoader = () => {
  return <View style={styles.box}></View>;
};

const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 120,
    backgroundColor: variables.bgSecondary,
  },
});
