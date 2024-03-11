import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";

import { FIREBASE_AUTH } from "@/app/configs/firebaseConfig";
import { variables } from "@/app/styles/variables";
import { useLikePostMutation } from "@/redux/posts/posts";
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
    comments = [],
    likes = [],
    location = "Washington",
    author = "Leonard",
    authorPhotoUrl,
    // authorUrl,
    withProfile,
    geoCode,
  } = props;

  const user = FIREBASE_AUTH.currentUser!;

  const isLikedByUser = likes.includes(user.uid);

  const { navigate } = useNavigation();
  const navigateComments = () => navigate("Comments", { photoUrl, id });
  const navigateMap = () => navigate("Map", { location: geoCode });
  const [likePost, { isLoading }] = useLikePostMutation();
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
            <EvilIcons name="comment" size={35} color={variables.colorWhite} />
            <Text
              text={comments.length}
              align="left"
              size="xs"
              addStyles={styles.boxItemText}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={isLoading}
            style={styles.boxItem}
            activeOpacity={ACTIVE_OPACITY}
          >
            {isLikedByUser ? (
              <AntDesign
                name="like1"
                size={25}
                color={variables.redColor}
                onPress={() => likePost(id)}
              />
            ) : (
              <AntDesign
                name="like2"
                size={25}
                color={variables.colorWhite}
                onPress={() => likePost(id)}
              />
            )}

            <Text
              text={likes.length}
              align="left"
              size="xs"
              addStyles={styles.boxItemText}
            />
          </TouchableOpacity>
          {location && (
            <TouchableOpacity
              activeOpacity={ACTIVE_OPACITY}
              onPress={navigateMap}
              style={[styles.boxItem, styles.boxItemRight]}
            >
              <EvilIcons
                name="location"
                size={30}
                color={variables.primaryColor}
              />
              <Text
                text={location}
                align="left"
                size="xs"
                addStyles={styles.locationText}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
