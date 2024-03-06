import * as Location from "expo-location";

export const geoCodeAsync = async (location: string) => {
  const address = await Location.geocodeAsync(location);
  const latitude = address[0]?.latitude;
  const longitude = address[0]?.longitude;
  return { latitude, longitude };
};
