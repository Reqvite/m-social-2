import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { Alert, View } from "react-native";

import { variables } from "@/app/styles/variables";

import { Button } from "../Button/Button";
import { cameraButtonsStyles } from "./styles";

type Props = {
  pickImage: () => void;
  toggleCameraType: () => void;
  deletePhoto: () => void;
  takePic: () => void;
  sharePic: () => void;
  isPhoto: string | undefined;
  permissionGranted: boolean | undefined;
};

export const CameraButtons = (props: Props) => {
  const {
    isPhoto,
    pickImage,
    toggleCameraType,
    deletePhoto,
    takePic,
    sharePic,
    permissionGranted,
  } = props;

  const [, requestPermission] = Camera.useCameraPermissions();

  const onPermissionDisabled = (callback: () => void) => {
    if (!permissionGranted) {
      requestPermission();
      Alert.alert("Turn on your camera permission in phone settings.");
    } else {
      callback();
    }
  };

  return (
    <View style={cameraButtonsStyles.uploadPhotoBox}>
      {isPhoto && (
        <>
          <Button
            addStyles={cameraButtonsStyles.cameraBtn}
            onPress={deletePhoto}
            icon={
              <MaterialIcons
                name="delete"
                size={24}
                color={variables.colorBlack}
              />
            }
          />
          <Button
            addStyles={cameraButtonsStyles.cameraBtn}
            onPress={sharePic}
            icon={
              <EvilIcons
                name="share-apple"
                size={30}
                color={variables.colorBlack}
              />
            }
          />
        </>
      )}
      {!isPhoto && (
        <>
          <Button
            addStyles={cameraButtonsStyles.cameraBtn}
            onPress={pickImage}
            icon={
              <AntDesign name="upload" size={24} color={variables.colorBlack} />
            }
          />
          <Button
            addStyles={[
              cameraButtonsStyles.cameraBtn,
              cameraButtonsStyles.cameraBtnBig,
            ]}
            onPress={() => onPermissionDisabled(takePic)}
            icon={
              <FontAwesome5
                name="camera"
                size={24}
                color={variables.colorBlack}
              />
            }
          />
          <Button
            addStyles={cameraButtonsStyles.cameraBtn}
            onPress={() => onPermissionDisabled(toggleCameraType)}
            icon={
              <MaterialIcons
                name="flip-camera-ios"
                size={24}
                color={variables.colorBlack}
              />
            }
          />
        </>
      )}
    </View>
  );
};
