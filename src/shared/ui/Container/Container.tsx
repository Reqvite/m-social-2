import { Dimensions, StyleSheet, View, ViewProps } from "react-native";

import { variables } from "@/app/styles/variables";

type Props = ViewProps & {
  withoutPadding?: boolean;
};

export const Container = (props: Props) => {
  const { children, withoutPadding = false, ...otherProps } = props;
  return (
    <View
      style={[styles.container, withoutPadding && styles.withoutPadding]}
      {...otherProps}
    >
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
  withoutPadding: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
});
