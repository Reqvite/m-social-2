import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { variables } from "@/app/styles/variables";

type Props = {
  text: string;
  addStyles?: object;
  onPress?: () => void;
};
export const Button = (props: Props) => {
  const { text, addStyles, onPress } = props;
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
        addStyles && addStyles,
        isPressed && styles.buttonPressed,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.text}>{text}</Text>
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
