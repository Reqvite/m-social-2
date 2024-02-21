import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./styles";

type Props = {
  location: string;
};
export const Map = ({ location }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBox} />
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: 47.751076,
          longitude: -120.740135,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={1}
        // onMapReady={() => console.log("Map is ready")}
        // onRegionChange={() => console.log("Region change")}
      >
        <Marker
          title="I am here"
          coordinate={{
            latitude: 47.751076,
            longitude: -120.740135,
          }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};
