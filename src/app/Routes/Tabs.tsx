import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity } from "react-native";

import { CreatePostsScreen, HomeScreen, ProfileScreen } from "@/screens";
import { ACTIVE_OPACITY } from "@/shared/const";

import { variables } from "../styles/variables";

const { Navigator, Screen } = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: variables.bgPrimary },
        tabBarActiveTintColor: variables.accentColor,
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: variables.bgPrimary,
        },
        headerTitleStyle: {
          color: variables.primaryColor,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
        },
        headerRight: () => (
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            style={styles.logoutIcon}
          >
            <MaterialIcons
              name="logout"
              size={24}
              color={variables.grayColor}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Screen
        name="Post"
        component={HomeScreen}
        options={() => ({
          // tabBarStyle: ((route) => {
          //   const routeName = getFocusedRouteNameFromRoute(route) ?? "";
          //   if (routeName === "Comments" || routeName === "Map") {
          //     return { display: "none" };
          //   }
          //   return;
          // })(route),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dynamic-feed" size={size} color={color} />
          ),
        })}
      />
      <Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="post-add" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  logoutIcon: {
    marginRight: 15,
  },
});
