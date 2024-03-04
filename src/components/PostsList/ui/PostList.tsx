import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import { PostCardI } from "@/shared/types";
import { PostCard } from "@/shared/ui";

type Props = {
  withProfile?: boolean;
  list?: PostCardI[];
};

export const PostList = (props: Props) => {
  const { withProfile = true, list = [] } = props;
  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={(post) => (
          <PostCard {...post.item} withProfile={withProfile} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 35,
  },
});
