import { ReactNode } from "react";
import {
  Keyboard,
  KeyboardAvoidingView as KeyboardAvoidingViewNative,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { variables } from "@/app/styles/variables";

type Props = {
  children: ReactNode;
};

export const KeyboardAvoidingView = ({ children }: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <View style={styles.container}>
        <KeyboardAvoidingViewNative
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          {children}
        </KeyboardAvoidingViewNative>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.bgPrimary,
  },
});
