import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

import { selectIsRegisteredCompleted } from "@/redux/ui/selector";
import { useAppSelector } from "@/shared/lib/hooks";
import { Container, Loader } from "@/shared/ui";

import { FIREBASE_AUTH } from "../configs/firebaseConfig";
import { AuthScreens } from "./AuthScreens";
import { Tabs } from "./Tabs";

export const useRoute = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isRegisterCompleted = useAppSelector(selectIsRegisteredCompleted);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [isRegisterCompleted]);

  if (isLoading) {
    return (
      <Container
        // eslint-disable-next-line react-native/no-inline-styles
        addStyles={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader size="large" />
      </Container>
    );
  }

  if (!user || !user.displayName) {
    return <AuthScreens />;
  }

  return <Tabs />;
};
