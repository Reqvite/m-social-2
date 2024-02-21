import { ReactNode, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { variables } from "@/app/styles/variables";

type Props = {
  text?: string;
  addStyles?: object;
  icon?: ReactNode;
  onPress?: () => void;
};
export const Button = (props: Props) => {
  const { icon, text, addStyles, onPress } = props;
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };
  return (
    <Pressable
      style={[
        styles.button,
        icon ? styles.withIcon : null,
        addStyles && addStyles,
        isPressed && styles.buttonPressed,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {icon ? icon : <Text style={styles.text}>{text}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: variables.accentColor,
    borderRadius: 20,
    height: 51,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  withIcon: {
    width: 34,
    height: 34,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: variables.accentColorLight,
  },
  text: {
    textAlign: "center",
    color: variables.colorWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
});
