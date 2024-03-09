import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";

import { FIREBASE_AUTH } from "@/app/configs/firebaseConfig";
import { PostList } from "@/components/PostsList";
import { ProfileHeader } from "@/components/ProfileHeader";
import { useGetUserPosts } from "@/redux/posts/posts";
import { Container } from "@/shared/ui";

const ProfileScreen = () => {
  const isFocused = useIsFocused();

  const auth = FIREBASE_AUTH.currentUser;
  const { data, isLoading, isFetching, refetch } = useGetUserPosts(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch]);

  if (!auth) {
    FIREBASE_AUTH.signOut();
    return;
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Container addStyles={{ paddingBottom: 90 }}>
      <ProfileHeader
        isLoading={isLoading}
        author={auth.displayName!}
        authorPhotoUrl={auth.photoURL}
        posts={data?.length}
      />
      <PostList
        list={data}
        isLoading={isLoading}
        isFetching={isFetching}
        withRefresh={false}
      />
    </Container>
  );
};

export default ProfileScreen;
