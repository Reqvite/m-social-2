import { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Button, Input, Text } from "@/shared/ui";

import { styles } from "./styles";

type Props = {
  isRegistration: boolean;
};

export const AuthForm = ({ isRegistration }: Props) => {
  const [text, setText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <ImageBackground
              source={require("../../../shared/assets/imgs/auth/bg-auth.jpg")}
              resizeMode="cover"
              style={styles.backgroundImage}
            >
              <View style={styles.box}>
                <Text
                  text={isRegistration ? "Registration" : "Login"}
                  size="xl"
                  addStyles={styles.title}
                />
                <View style={styles.form}>
                  <Input
                    placeholder="Login"
                    value={text}
                    onChangeText={setText}
                  />
                  <Input
                    placeholder="Email"
                    value={text}
                    onChangeText={setText}
                  />
                  <Input
                    placeholder="Password"
                    value={text}
                    onChangeText={setText}
                  />
                  <Button
                    text="Submit"
                    addStyles={styles.button}
                    onPress={() => {}}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
