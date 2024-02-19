import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { CreatePostsScreen, HomeScreen, ProfileScreen } from "@/screens";

import { variables } from "../styles/variables";

const { Navigator, Screen } = createBottomTabNavigator();

const options = {
  tabBarActiveTintColor: variables.accentColor,
  headerShown: false,
};

export const Tabs = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Post"
        component={HomeScreen}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            if (routeName === "Comments" || routeName === "Map") {
              return { display: "none" };
            }
            return;
          })(route),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dynamic-feed" size={size} color={color} />
          ),
          ...options,
        })}
      />
      <Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="post-add" size={size} color={color} />
          ),
          ...options,
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          ...options,
        }}
      />
    </Navigator>
  );
};
