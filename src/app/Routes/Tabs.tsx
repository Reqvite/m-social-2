import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import { CreatePostsScreen, HomeScreen, ProfileScreen } from "@/screens";
import { Button } from "@/shared/ui";

import { FIREBASE_AUTH } from "../configs/firebaseConfig";
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
          // color: variables.primaryColor,
          // textAlign: "center",
          // fontWeight: "bold",
          // fontSize: 20,
          display: "none",
        },
        headerRight: () => (
          <Button
            style={styles.logoutIcon}
            onPress={() => FIREBASE_AUTH.signOut()}
            icon={
              <MaterialIcons
                name="logout"
                size={24}
                color={variables.grayColor}
              />
            }
          />
        ),
      }}
    >
      <Screen
        name="Post"
        component={HomeScreen}
        options={() => ({
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
          headerShown: false,
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
