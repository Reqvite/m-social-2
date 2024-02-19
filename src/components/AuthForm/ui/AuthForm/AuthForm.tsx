import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Button, Input, PhotoLoader, Text } from "@/shared/ui";

import { useAuthForm } from "../../model/useAuthForm";
import { styles } from "./styles";

type Props = {
  isRegistration?: boolean;
};

export const AuthForm = ({ isRegistration }: Props) => {
  const { dispatch, state } = useAuthForm();
  const navigation = useNavigation();
  const navigate = () =>
    navigation.navigate(isRegistration ? "Login" : "Registration");

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <ImageBackground
              source={require("../../../../shared/assets/imgs/auth/bg-auth.jpg")}
              resizeMode="cover"
              style={styles.backgroundImage}
            >
              <View
                style={[
                  styles.box,
                  isRegistration && styles.boxTopBiggerPadding,
                ]}
              >
                {isRegistration && (
                  <PhotoLoader addStyles={styles.photoLoader} />
                )}
                <Text
                  text={isRegistration ? "Registration" : "Login"}
                  size="xl"
                  addStyles={styles.title}
                />
                <View style={styles.form}>
                  <Input
                    placeholder="Login"
                    value={state.login}
                    onChangeText={(text) =>
                      dispatch({ type: "SET_LOGIN", payload: text })
                    }
                  />
                  <Input
                    placeholder="Email"
                    value={state.email}
                    onChangeText={(text) =>
                      dispatch({ type: "SET_EMAIL", payload: text })
                    }
                  />
                  <Input
                    placeholder="Password"
                    value={state.password}
                    onChangeText={(text) =>
                      dispatch({ type: "SET_PASSWORD", payload: text })
                    }
                  />
                  <Button
                    text="Submit"
                    addStyles={styles.button}
                    onPress={() => {}}
                  />
                  <Pressable onPress={navigate}>
                    <Text
                      addStyles={styles.link}
                      size="xs"
                      text={
                        isRegistration
                          ? "Already have account?"
                          : "Already registered?"
                      }
                    />
                  </Pressable>
                </View>
              </View>
            </ImageBackground>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
