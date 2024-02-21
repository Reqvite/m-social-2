import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { RefObject } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

import { CameraButtons } from "./CameraButtons";
import { usePhotoLoader } from "./model/usePhotoLoader";
import { styles } from "./styles";

type Props = {
  addStyles?: object;
  onPress?: () => void;
};

export const PhotoLoader = (props: Props) => {
  const { addStyles, onPress } = props;

  const {
    photo,
    type,
    hasCameraPermission,
    cameraRef,
    toggleCameraType,
    deletePhoto,
    pickImage,
    takePic,
    sharePic,
  } = usePhotoLoader();

  if (!hasCameraPermission) {
    return <Text>Requesting permissions...</Text>;
  }

  return (
    <>
      <Camera
        type={type}
        ref={cameraRef as RefObject<Camera>}
        style={styles.camera}
      >
        <View style={styles.camera}>
          <CameraButtons
            isPhoto={photo}
            permissionGranted={hasCameraPermission.granted}
            toggleCameraType={toggleCameraType}
            deletePhoto={deletePhoto}
            pickImage={pickImage}
            takePic={takePic}
            sharePic={sharePic}
          />
          {photo && (
            <Image
              style={styles.preview}
              source={{
                uri: photo ? photo : undefined,
              }}
            />
          )}
        </View>
      </Camera>

      {/* <View style={[styles.box, addStyles && addStyles]}>
        <Pressable style={styles.icon} onPress={onPress}>
          {photo ? (
            <Entypo
              name="circle-with-cross"
              size={32}
              color={variables.accentColor}
            />
          ) : (
            <AntDesign
              name="pluscircleo"
              size={30}
              color={variables.accentColor}
            />
          )}
        </Pressable>
      </View> */}
    </>
  );
};
