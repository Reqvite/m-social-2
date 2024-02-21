import { Container, Map, Text } from "@/shared/ui";

type Props = {
  location?: string;
};
const MapScreen = ({ location }: Props) => {
  return (
    <Container>
      {location ? <Map location={location} /> : <Text text="Error" />}
    </Container>
  );
};

export default MapScreen;
