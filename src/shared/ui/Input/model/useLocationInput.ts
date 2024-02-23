import * as Location from "expo-location";
import { useCallback, useEffect, useState } from "react";
import { Alert, Platform } from "react-native";

export const useLocationInput = (setValue: (location: string) => void) => {
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = useCallback(async () => {
    setIsLoading(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setIsLoading(false);
      return;
    }

    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy:
          Platform.OS === "android"
            ? Location.Accuracy.Low
            : Location.Accuracy.Lowest,
      });
      const latitude = location?.coords.latitude;
      const longitude = location?.coords.longitude;
      const geoCode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      const fullLocation = `${geoCode[0].city},${geoCode[0].country}`;
      setValue(fullLocation);
      setIsLoading(false);
    } catch (error) {
      Alert.alert("Error", "Error fetching location", [{ text: "OK" }]);
      setIsLoading(false);
    }
  }, [setValue]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return { isLoading, getLocation };
};
