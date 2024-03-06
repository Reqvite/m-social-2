import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import { PostCardI } from "@/shared/types";
import { Loader, PostCard } from "@/shared/ui";

type Props = {
  withProfile?: boolean;
  list?: PostCardI[];
  isLoading?: boolean;
};

export const PostList = (props: Props) => {
  const { withProfile = true, list = [], isLoading } = props;

  if (isLoading) {
    return <Loader />;
  }

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
