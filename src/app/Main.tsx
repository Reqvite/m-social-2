import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { useRoute } from "./Routes/AppRoute";

export const Main = () => {
  const routing = useRoute();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>{routing}</NavigationContainer>
    </>
  );
};
