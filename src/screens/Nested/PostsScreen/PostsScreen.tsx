import { PostList } from "@/components/PostsList";
import { useGetPosts } from "@/redux/posts/posts";
import { Container } from "@/shared/ui";

const PostsScreen = () => {
  const { data, isLoading, isFetching, refetch } = useGetPosts();

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
