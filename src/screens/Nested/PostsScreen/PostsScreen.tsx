import { PostList } from "@/components/PostsList";
import { useGetPosts } from "@/redux/posts/posts";
import { Container } from "@/shared/ui";

const PostsScreen = () => {
  const { data } = useGetPosts();
  return (
    <Container>
      <PostList list={data} />
    </Container>
  );
};

export default PostsScreen;
