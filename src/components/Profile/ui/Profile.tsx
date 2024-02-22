import { PostList } from "@/components/PostsList";
import { ProfileCard } from "@/shared/ui";

export const Profile = () => {
  const author = "Leonard";
  const authorPhotoUrl =
    "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp";
  return (
    <>
      <ProfileCard author={author} photoUrl={authorPhotoUrl} />
      <PostList withProfile={false} />
    </>
  );
};
