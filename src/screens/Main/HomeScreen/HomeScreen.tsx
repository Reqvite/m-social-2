import { createStackNavigator } from "@react-navigation/stack";

import { CommentsScreenAsync } from "../../Nested/CommentsScreen/CommentsScreen.async";
import { MapScreenAsync } from "../../Nested/MapScreen/MapScreen.async";
import PostsScreen from "../../Nested/PostsScreen/PostsScreen";

const { Navigator, Screen } = createStackNavigator();

const HomeScreen = () => {
  return (
    <Navigator initialRouteName="Posts">
      <Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="Comments" component={CommentsScreenAsync} />
      <Screen name="Map" component={MapScreenAsync} />
    </Navigator>
  );
};

export default HomeScreen;
