import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

import { Container, Loader } from "@/shared/ui";

import { FIREBASE_AUTH } from "../configs/firebaseConfig";
import { AuthScreens } from "./AuthScreens";
import { Tabs } from "./Tabs";

export const useRoute = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

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

  if (!user) {
    return <AuthScreens />;
  }

  return <Tabs />;
};
