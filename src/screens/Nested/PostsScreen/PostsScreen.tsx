import { PostList } from "@/components/PostsList";
import { Container } from "@/shared/ui";

const PostsScreen = () => {
  // const { isLoading, data } = useGetPosts();
  return (
    <Container>
      <PostList />
    </Container>
  );
};

export default PostsScreen;
