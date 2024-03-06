import { RouteProp } from "@react-navigation/native";

import { AppRootParamList } from "@/app/Routes/types";
import { Container, Map, Text } from "@/shared/ui";

type Props = {
  route: RouteProp<AppRootParamList, "Map">;
};
const MapScreen = ({ route }: Props) => {
  const { location } = route.params;
  return (
    <Container>
      {location ? (
        <Map location={location} />
      ) : (
        <Text text="Sorry, but the location is not found." />
      )}
    </Container>
  );
};

export default MapScreen;
