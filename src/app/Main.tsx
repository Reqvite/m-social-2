import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Suspense } from "react";

import { useRoute } from "./Routes/AppRoute";

export const Main = () => {
  const routing = useRoute();

  return (
    <Suspense>
      <StatusBar style="light" />
      <NavigationContainer>{routing}</NavigationContainer>
    </Suspense>
  );
};
