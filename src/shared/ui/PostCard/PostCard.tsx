import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { variables } from "@/app/styles/variables";
import { ACTIVE_OPACITY } from "@/shared/const";

import { ProfileCard } from "../ProfileCard/ProfileCard";
import { Text } from "../Text/Text";

type Props = {
  title: string;
  photoUrl: string;
  id: string;
  comments: string;
  likes: string;
  location: string;
  author: string;
  authorUrl: string;
  withProfile?: boolean;
};

export const PostCard = (props: Props) => {
  const {
    title = "Preview title",
    photoUrl,
    id,
    comments = "10",
    likes = "10",
    location = "Washington",
    author = "Leonard",
    authorUrl,
    withProfile = true,
  } = props;

  const navigation = useNavigation();
  const navigateComments = () =>
    navigation.navigate("Comments", { photoUrl, id });
  const navigateMap = () => navigation.navigate("Map", { location });

  return (
    <>
      {withProfile && <ProfileCard author={author} photoUrl={authorUrl} />}
      <View style={styles.container}>
        <Image
          source={{
            uri: photoUrl,
          }}
          style={styles.img}
          resizeMode="cover"
        />
        <Text
          text={title}
          align="left"
          size="xs"
          bold
          addStyles={styles.title}
        />
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.boxItem}
            activeOpacity={ACTIVE_OPACITY}
            onPress={navigateComments}
          >
            <EvilIcons name="comment" size={30} color={variables.colorWhite} />
            <Text
              text={comments}
              align="left"
              size="xs"
              addStyles={styles.boxItemText}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxItem}
            activeOpacity={ACTIVE_OPACITY}
          >
            <AntDesign
              name="like2"
              size={20}
              color={variables.colorWhite}
              onPress={() => console.log(1)}
            />
            <Text
              text={likes}
              align="left"
              size="xs"
              addStyles={styles.boxItemText}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            onPress={navigateMap}
            style={[styles.boxItem, styles.boxItemRight]}
          >
            <EvilIcons
              name="location"
              size={24}
              color={variables.primaryColor}
            />
            <Text
              text={location}
              align="left"
              size="xs"
              addStyles={styles.locationText}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  img: {
    alignSelf: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  title: {
    color: variables.primaryColor,
    marginTop: 8,
  },
  box: { flexDirection: "row", gap: 20 },
  boxItem: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  boxItemRight: {
    marginLeft: "auto",
  },
  boxItemText: {
    color: variables.colorWhite,
    marginTop: 5,
  },
  locationText: {
    color: variables.colorWhite,
    textDecorationLine: "underline",
  },
});
