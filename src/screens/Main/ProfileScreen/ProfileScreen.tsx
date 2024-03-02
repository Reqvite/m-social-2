import { FIREBASE_AUTH } from "@/app/configs/firebaseConfig";
import { Profile } from "@/components/Profile";
import { Container } from "@/shared/ui";

const ProfileScreen = () => {
  const auth = FIREBASE_AUTH.currentUser;

  if (!auth) {
    FIREBASE_AUTH.signOut();
    return;
  }

  return (
    <Container>
      <Profile author={auth.displayName!} authorPhotoUrl={auth.photoURL} />
    </Container>
  );
};

export default ProfileScreen;
