import { ReactNode, useState } from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./styles";

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
