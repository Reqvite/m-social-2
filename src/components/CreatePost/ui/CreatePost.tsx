import { MaterialIcons } from "@expo/vector-icons";
import { useCallback } from "react";
import { View } from "react-native";

import { variables } from "@/app/styles/variables";
import {
  Button,
  Input,
  KeyboardAvoidingView,
  LocationInput,
  PhotoLoader,
} from "@/shared/ui";

import { useCreatePost } from "../model/useCreatePost";
import { styles } from "./styles";

export const CreatePost = () => {
  const { dispatch, state, onCreatePost, isLoading } = useCreatePost();

  const setLocation = useCallback(
    (location: string) => {
      dispatch({ type: "SET_LOCATION", payload: location });
    },
    [dispatch],
  );

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
            <LocationInput
              value={state.location}
              placeholder="Location"
              variant="underline"
              onChangeText={(text) =>
                dispatch({ type: "SET_LOCATION", payload: text })
              }
              setValue={setLocation}
            />
          </View>
          <Button
            text="Publish"
            addStyles={styles.button}
            onPress={onCreatePost}
            isLoading={isLoading}
            disabled={isLoading}
          />
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
