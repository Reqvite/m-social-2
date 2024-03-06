/* eslint-disable react-native/no-unused-styles */
import { Text as ReactText, TextProps } from "react-native";

import { styles } from "./styles";

type sizes = "xs" | "l" | "xl";
type align = "center" | "left" | "right";
type color = "primary" | "secondary" | "white";
type Props = TextProps & {
  text: string;
  bold?: boolean;
  addStyles?: object;
  size?: sizes;
  align?: align;
  color?: color;
};

export const Text = (props: Props) => {
  const {
    text,
    bold,
    size = "l",
    addStyles,
    align = "center",
    color = "primary",
    ...otherProps
  } = props;

  const sizeStyles = styles[size];
  const alignStyles = styles[align];
  const colorStyles = styles[color];
  return (
    <ReactText
      style={[
        styles.text,
        sizeStyles,
        alignStyles,
        bold && styles.bold,
        color && colorStyles,
        addStyles && addStyles,
      ]}
      {...otherProps}
    >
      {text}
    </ReactText>
  );
};
