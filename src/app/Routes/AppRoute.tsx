import { AuthScreens } from "./AuthScreens";
import { Tabs } from "./Tabs";

export const useRoute = (isAuth: boolean) => {
  if (!isAuth) {
    return <AuthScreens />;
  }
  return <Tabs />;
};
