import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useCallback } from "react";

import { Pressable, Text } from "@/app/styled";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

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

  return (
    <Pressable
      onPress={toggleColorScheme}
      className="flex-1 items-center justify-center dark:bg-slate-800"
      onLayout={onLayoutRootView}
    >
      <Text selectable={false} className="dark:bg-purple-400">
        {`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}
      </Text>
    </Pressable>
  );
}
