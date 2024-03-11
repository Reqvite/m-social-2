/* eslint-disable react-native/no-unused-styles */
import { FontAwesome } from "@expo/vector-icons";
import { ReactNode, useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";

import { variables } from "@/app/styles/variables";

import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import { styles } from "./styles";

type InputVariant = "default" | "underline" | "withButton";

export type InputBaseProps = TextInputProps & {
  isLoading?: boolean;
  addStyles?: object;
  variant?: InputVariant;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  onPress?: () => void;
};

export const Input = (props: InputBaseProps) => {
  const {
    isLoading,
    addStyles,
    leftAddon,
    rightAddon,
    variant = "default",
    onPress,
    ...otherProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const variantStyles = styles[variant as keyof typeof styles];

  const withButton = variant === "withButton";

  if (leftAddon || withButton || rightAddon) {
    return (
      <View style={[styles.containerWithAddon, addStyles && addStyles]}>
        {leftAddon && <View style={styles.leftAddon}>{leftAddon}</View>}
        <TextInput
          style={[
            styles.input,
            styles.inputWithAddon,
            variantStyles,
            isFocused && styles.focusedInput,
          ]}
          placeholderTextColor={variables.grayColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...otherProps}
        />
        {rightAddon && <View style={styles.rightAddon}>{rightAddon}</View>}
        {withButton && (
          <Button
            disabled={isLoading}
            onPress={onPress}
            addStyles={styles.button}
            icon={
              isLoading ? (
                <Loader color={variables.colorWhite} />
              ) : (
                <FontAwesome
                  name="send"
                  size={13}
                  color={variables.primaryColor}
                />
              )
            }
          />
        )}
      </View>
    );
  }
  return (
    <TextInput
      style={[
        styles.input,
        addStyles && addStyles,
        variantStyles,
        isFocused && styles.focusedInput,
      ]}
      placeholderTextColor={variables.grayColor}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...otherProps}
    />
  );
};
