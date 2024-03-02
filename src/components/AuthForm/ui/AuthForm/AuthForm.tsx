import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Pressable, View } from "react-native";

import {
  Button,
  Input,
  KeyboardAvoidingView,
  PhotoLoader,
  Text,
} from "@/shared/ui";

import { useAuthForm } from "../../model/useAuthForm";
import { styles } from "./styles";

type Props = {
  isRegistration?: boolean;
};

export const AuthForm = ({ isRegistration }: Props) => {
  const { dispatch, state, onSignIn, onSignUp, isLoading, progress } =
    useAuthForm();
  const navigation = useNavigation();
  const navigate = () =>
    navigation.navigate(isRegistration ? "Login" : "Registration");

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../../shared/assets/imgs/auth/bg-auth.jpg")}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <View
            style={[styles.box, isRegistration && styles.boxTopBiggerPadding]}
          >
            {isRegistration && (
              <PhotoLoader
                photo={state.photo}
                variant="small"
                progress={progress}
                addStyles={styles.photoLoader}
                onChangePhoto={(photo) =>
                  dispatch({ type: "SET_PHOTO", payload: photo })
                }
              />
            )}
            <Text
              text={isRegistration ? "Registration" : "Login"}
              size="xl"
              addStyles={styles.title}
            />
            <View style={styles.form}>
              {isRegistration && (
                <Input
                  placeholder="Login"
                  value={state.login}
                  onChangeText={(text) =>
                    dispatch({ type: "SET_LOGIN", payload: text })
                  }
                />
              )}
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
                isLoading={isLoading}
                disabled={isLoading}
                text="Submit"
                addStyles={styles.button}
                onPress={isRegistration ? onSignUp : onSignIn}
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
  );
};
