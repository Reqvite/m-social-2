import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "@/screens/RegisterScreen/RegisterScreen";

const { Navigator, Screen } = createStackNavigator();

export const AppRoute = () => {
  return (
    <Navigator>
      <Screen name="Registration" component={RegisterScreen} />
    </Navigator>
  );
};
