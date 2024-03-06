export type AppRootParamList = {
  Home: undefined;
  Login: undefined;
  Registration: undefined;
  Comments: { photoUrl: string; id: string };
  Map: {
    location: {
      latitude: number;
      longitude: number;
    };
  };
  CreatePost: undefined;
  Posts: undefined;
};
