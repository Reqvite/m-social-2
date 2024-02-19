import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen, RegisterScreen } from "@/screens";

const { Navigator, Screen } = createStackNavigator();
export const AuthScreens = () => {
  return (
    <Navigator initialRouteName="Login">
      <Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Registration"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
