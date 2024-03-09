import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { variables } from "@/app/styles/variables";
import { BLUR_HASH, IMAGE_TRANSITION, MOCK_AVATAR } from "@/shared/const";

import { Text } from "../Text/Text";

type Props = {
  photoUrl?: string | null;
  author: string;
  isBig?: boolean;
};
export const ProfileCard = (props: Props) => {
  const { photoUrl, author, isBig } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: photoUrl ? photoUrl : MOCK_AVATAR,
        }}
        placeholder={BLUR_HASH}
        style={[styles.img, isBig && styles.isBig]}
        contentFit="cover"
        transition={IMAGE_TRANSITION}
      />
      <Text
        text={author}
        size="xs"
        align="left"
        addStyles={styles.authorText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  img: {
    alignSelf: "center",
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  authorText: {
    color: variables.colorWhite,
  },
  isBig: {
    width: 60,
    height: 60,
  },
});
