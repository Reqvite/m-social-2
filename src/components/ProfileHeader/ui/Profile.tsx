import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

import { Button, ProfileCard, Text } from "@/shared/ui";

type Props = {
  author: string;
  authorPhotoUrl?: string | null;
  posts?: number;
  isLoading?: boolean;
};

export const ProfileHeader = (props: Props) => {
  const { author, authorPhotoUrl = "", posts, isLoading } = props;

  const { navigate } = useNavigation();

  return (
    <View style={styles.box}>
      <View style={styles.flex}>
        <ProfileCard author={author} photoUrl={authorPhotoUrl} isBig />
        <View style={styles.item}>
          {!isLoading && <Text size="xs" bold text={String(posts)} />}
          <Text size="xs" text={`posts`} />
        </View>
      </View>
      {posts === 0 && (
        <Button
          text="Add your first post"
          onPress={() => navigate("CreatePost")}
        />
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  box: {
    gap: 30,
    marginBottom: 10,
  },
  item: {},
  flex: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
