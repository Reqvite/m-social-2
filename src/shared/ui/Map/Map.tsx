import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./styles";

type Props = {
  location: {
    latitude: number;
    longitude: number;
  };
};
export const Map = ({ location }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBox} />
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
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
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};
