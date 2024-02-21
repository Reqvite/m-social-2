import { Image, StyleSheet, View } from "react-native";

import { variables } from "@/app/styles/variables";

import { Text } from "../Text/Text";

type Props = {
  photoUrl: string;
  author: string;
};
export const ProfileCard = (props: Props) => {
  const { photoUrl, author } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: photoUrl,
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