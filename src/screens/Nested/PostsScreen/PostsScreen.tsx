import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";

import { PostList } from "@/components/PostsList";
import { useGetPosts } from "@/redux/posts/posts";
import { Container } from "@/shared/ui";

const PostsScreen = () => {
  const isFocused = useIsFocused();

  const { data, isLoading, isFetching, refetch } = useGetPosts();

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch]);

  return (
    <Container>
      <PostList
        withProfile
        list={data}
        isLoading={isLoading}
        isFetching={isFetching}
        refetch={refetch}
      />
    </Container>
  );
};

export default PostsScreen;
