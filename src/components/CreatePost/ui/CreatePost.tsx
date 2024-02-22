import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";

import { variables } from "@/app/styles/variables";
import { Button, Input, KeyboardAvoidingView, PhotoLoader } from "@/shared/ui";

import { styles } from "./styles";

export const CreatePost = () => {
  const [, setPhoto] = useState<undefined | string>(undefined);
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <View>
          <PhotoLoader setPhoto={setPhoto} />
          <View style={styles.form}>
            <Input placeholder="Title" variant="underline" />
            <Input
              placeholder="Location"
              variant="underline"
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
          // onPress={deletePhoto}
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
