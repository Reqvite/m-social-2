import { PostList } from "@/components/PostsList";
import { ProfileCard } from "@/shared/ui";

type Props = {
  author: string;
  authorPhotoUrl?: string | null;
};

export const Profile = (props: Props) => {
  const { author, authorPhotoUrl = "" } = props;

  return (
    <>
      <ProfileCard author={author} photoUrl={authorPhotoUrl} />
      <PostList withProfile={false} />
    </>
  );
};
