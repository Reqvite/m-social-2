/* eslint-disable react-native/no-unused-styles */
import { StyleSheet, Text as ReactText, TextProps } from "react-native";

type sizes = "xs" | "l" | "xl";
type align = "center" | "left" | "right";
type Props = TextProps & {
  text: string;
  bold?: boolean;
  addStyles?: object;
  size?: sizes;
  align?: align;
};

export const Text = (props: Props) => {
  const {
    text,
    bold,
    size = "l",
    addStyles,
    align = "center",
    ...otherProps
  } = props;

  const sizeStyles = styles[size];
  const alignStyles = styles[align];
  return (
    <ReactText
      style={[
        styles.title,
        sizeStyles,
        alignStyles,
        bold && styles.bold,
        addStyles && addStyles,
      ]}
      {...otherProps}
    >
      {text}
    </ReactText>
  );
};

export const styles = StyleSheet.create({
  title: {
    letterSpacing: 1,
  },
  xs: {
    fontSize: 16,
  },
  l: {
    fontSize: 24,
  },
  xl: {
    fontSize: 30,
  },
  bold: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
});
