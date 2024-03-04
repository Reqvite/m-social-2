import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";

import { variables } from "@/app/styles/variables";
import { ACTIVE_OPACITY, BLUR_HASH, IMAGE_TRANSITION } from "@/shared/const";
import { PostCardI } from "@/shared/types";

import { ProfileCard } from "../ProfileCard/ProfileCard";
import { Text } from "../Text/Text";
import { styles } from "./styles";

type Props = PostCardI & {
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
    authorPhotoUrl,
    // authorUrl,
    withProfile,
  } = props;

  const navigation = useNavigation();
  const navigateComments = () =>
    navigation.navigate("Comments", { photoUrl, id });
  const navigateMap = () => navigation.navigate("Map", { location });

  return (
    <>
      {withProfile && <ProfileCard author={author} photoUrl={authorPhotoUrl} />}
      <View style={styles.container}>
        <Image
          source={{
            uri: photoUrl,
          }}
          placeholder={BLUR_HASH}
          style={styles.img}
          contentFit="cover"
          transition={IMAGE_TRANSITION}
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
