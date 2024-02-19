import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

import { useRoute } from "@/app/Routes/AppRoute";
import { Container } from "@/shared/ui";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    OpenSans: require("./src/shared/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const routing = useRoute(true);

  return (
    <NavigationContainer>
      <Container onLayout={onLayoutRootView}>{routing}</Container>
    </NavigationContainer>
  );
}
