import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

import { variables } from "@/app/styles/variables";
import { Button, Input, KeyboardAvoidingView, PhotoLoader } from "@/shared/ui";

import { useCreatePost } from "../model/useCreatePost";
import { styles } from "./styles";

export const CreatePost = () => {
  const { dispatch, state } = useCreatePost();

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <View>
          <PhotoLoader
            photo={state.photo}
            onChangePhoto={(photo) =>
              dispatch({ type: "SET_PHOTO", payload: photo })
            }
          />
          <View style={styles.form}>
            <Input
              value={state.title}
              placeholder="Title"
              variant="underline"
              onChangeText={(text) =>
                dispatch({ type: "SET_TITLE", payload: text })
              }
            />
            <Input
              value={state.location}
              placeholder="Location"
              variant="underline"
              onChangeText={(text) =>
                dispatch({ type: "SET_LOCATION", payload: text })
              }
              leftAddon={
                <Entypo
                  name="location-pin"
                  size={24}
                  color={variables.primaryColor}
                />
              }
            />
          </View>
          <Button text="Publish" addStyles={styles.button} />
        </View>
        <Button
          addStyles={styles.deleteButton}
          onPress={() => dispatch({ type: "RESET_STATE" })}
          icon={
            <MaterialIcons
              name="delete"
              size={24}
              color={variables.colorBlack}
            />
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};
