import { Image, StyleSheet, View } from "react-native";

import { variables } from "@/app/styles/variables";
import { MOCK_AVATAR } from "@/shared/const";

import { Text } from "../Text/Text";

type Props = {
  photoUrl?: string | null;
  author: string;
};
export const ProfileCard = (props: Props) => {
  const { photoUrl, author } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: photoUrl ? photoUrl : MOCK_AVATAR,
        }}
        style={styles.img}
        resizeMode="cover"
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
    gap: 10,
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
});
