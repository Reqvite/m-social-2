/* eslint-disable react-native/no-unused-styles */
import { FontAwesome } from "@expo/vector-icons";
import { ReactNode, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import { variables } from "@/app/styles/variables";

import { Button } from "../Button/Button";

type InputVariant = "default" | "underline" | "withButton";

type Props = TextInputProps & {
  variant?: InputVariant;
  leftAddon?: ReactNode;
  onPress?: () => void;
};

export const Input = (props: Props) => {
  const { leftAddon, variant = "default", onPress, ...otherProps } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const variantStyles = styles[variant as keyof typeof styles];

  const withButton = variant === "withButton";

  if (leftAddon || withButton) {
    return (
      <View style={styles.containerWithAddon}>
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
        {withButton && (
          <Button
            onPress={onPress}
            addStyles={styles.button}
            icon={
              <FontAwesome
                name="send"
                size={13}
                color={variables.primaryColor}
              />
            }
          />
        )}
      </View>
    );
  }
  return (
    <TextInput
      style={[styles.input, variantStyles, isFocused && styles.focusedInput]}
      placeholderTextColor={variables.grayColor}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  containerWithAddon: {
    position: "relative",
  },
  input: {
    color: variables.primaryColor,
    height: 50,
    padding: 15,
    fontSize: 16,
    borderStyle: "solid",
    borderColor: variables.borderColor,
  },
  default: {
    backgroundColor: variables.bgSecondary,
    borderWidth: 2,
    borderRadius: 8,
  },
  underline: {
    backgroundColor: variables.bgPrimary,
    borderBottomWidth: 2,
  },
  withButton: {
    borderWidth: 2,
    backgroundColor: variables.bgSecondary,
    borderRadius: 50,
  },
  focusedInput: {
    borderColor: variables.accentColor,
  },
  leftAddon: {
    position: "absolute",
    zIndex: 10,
    top: 10,
    left: 0,
  },
  inputWithAddon: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    position: "absolute",
    zIndex: 10,
    top: 10,
    right: 10,
  },
});
