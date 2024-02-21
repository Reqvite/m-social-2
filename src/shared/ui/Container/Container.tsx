import { Dimensions, StyleSheet, View, ViewProps } from "react-native";

import { variables } from "@/app/styles/variables";

export const Container = ({ children, ...otherProps }: ViewProps) => {
  return (
    <View style={styles.container} {...otherProps}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: variables.bgPrimary,
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 16,
  },
});
