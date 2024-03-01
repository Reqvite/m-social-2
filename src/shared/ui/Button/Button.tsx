import { ReactNode, useState } from "react";
import { Pressable, PressableProps, Text } from "react-native";

import { variables } from "@/app/styles/variables";

import { Loader } from "../Loader/Loader";
import { styles } from "./styles";

type buttonVariants = "clear";

type Props = PressableProps & {
  isLoading?: boolean;
  text?: string;
  addStyles?: object;
  icon?: ReactNode;
  onPress?: () => void;
  variant?: buttonVariants;
};
export const Button = (props: Props) => {
  const { isLoading, icon, text, addStyles, variant, onPress, ...otherProps } =
    props;
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
      {...otherProps}
    >
      {isLoading ? (
        <Loader color={variables.colorWhite} />
      ) : icon ? (
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
