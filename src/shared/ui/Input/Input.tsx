import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

import { variables } from "@/app/styles/variables";

type Props = TextInputProps & {
  newProps?: string;
};

export const Input = (props: Props) => {
  const { ...otherProps } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <TextInput
      style={[styles.input, isFocused && styles.focusedInput]}
      placeholderTextColor={variables.grayColor}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 15,
    backgroundColor: variables.bgSecondary,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: variables.borderColor,
    borderRadius: 8,
    fontSize: 16,
  },
  focusedInput: {
    borderColor: variables.accentColor,
  },
});
