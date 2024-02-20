import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { Text } from "../Text/Text";

type Props = {
  title: string;
  photo: string;
  id: string;
  comments: string;
};

export const PostCard = (props: Props) => {
  const { title = "Preview title", photo, id, comments = "10" } = props;

  const navigation = useNavigation();
  const navigate = () => navigation.navigate("Comments", { photo, id });
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/imgs/auth/bg-auth.jpg")}
        style={styles.img}
        resizeMode="cover"
      />
      <Text text={title} align="left" size="xs" bold addStyles={styles.title} />
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.boxItem}
          activeOpacity={0.8}
          onPress={navigate}
        >
          <EvilIcons name="comment" size={30} color="black" />
          <Text
            text={comments}
            align="left"
            size="xs"
            addStyles={styles.boxItemText}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  img: {
    alignSelf: "center",
    width: 400,
    height: 240,
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
  },
  box: {},
  boxItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  boxItemText: {
    marginTop: 5,
  },
});
