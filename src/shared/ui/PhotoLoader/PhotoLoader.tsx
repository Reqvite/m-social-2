import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import { variables } from "@/app/styles/variables";

type Props = {
  addStyles?: object;
  onPress?: () => void;
};

export const PhotoLoader = (props: Props) => {
  const { addStyles, onPress } = props;

  const photo = false;
  return (
    <View style={[styles.box, addStyles && addStyles]}>
      <Pressable style={styles.icon} onPress={onPress}>
        {photo ? (
          <Entypo
            name="circle-with-cross"
            size={32}
            color={variables.accentColor}
          />
        ) : (
          <AntDesign
            name="pluscircleo"
            size={30}
            color={variables.accentColor}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 120,
    backgroundColor: variables.bgSecondary,
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    right: -15,
    bottom: 14,
  },
});
