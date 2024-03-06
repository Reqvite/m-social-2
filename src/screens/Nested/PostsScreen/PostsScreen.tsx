import { PostList } from "@/components/PostsList";
import { useGetPosts } from "@/redux/posts/posts";
import { Container } from "@/shared/ui";

const PostsScreen = () => {
  const { data, isLoading } = useGetPosts();

  return (
    <Container>
      <PostList list={data} isLoading={isLoading} />
    </Container>
  );
};

export default PostsScreen;
