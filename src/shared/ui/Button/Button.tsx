import { ReactNode, useState } from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./styles";

type buttonVariants = "clear";

type Props = {
  text?: string;
  addStyles?: object;
  icon?: ReactNode;
  onPress?: () => void;
  variant?: buttonVariants;
};
export const Button = (props: Props) => {
  const { icon, text, addStyles, variant, onPress } = props;
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
        variant && styles[variant],
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {icon ? (
        icon
      ) : (
        <Text
          style={[
            styles.text,
            isPressed && variant === "clear" && styles.buttonClearPressed,
          ]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};
