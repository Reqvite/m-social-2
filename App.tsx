import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Suspense, useEffect, useState } from "react";

import { Providers } from "@/app";
import { useRoute } from "@/app/Routes/AppRoute";
import { Text } from "@/shared/ui";

SplashScreen.preventAutoHideAsync;
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    OpenSans: require("./src/shared/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const routing = useRoute(true);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <Providers>
      <Suspense fallback={<Text text="LOADING" />}>
        <StatusBar style="light" />
        <NavigationContainer>{routing}</NavigationContainer>
      </Suspense>
    </Providers>
  );
}
