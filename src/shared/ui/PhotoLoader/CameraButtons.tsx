import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { TouchableOpacity, View } from "react-native";

import { variables } from "@/app/styles/variables";

import { cameraButtonsStyles } from "./styles";

type Props = {
  pickImage: () => void;
  toggleCameraType: () => void;
  deletePhoto: () => void;
  takePic: () => void;
  sharePic: () => void;
  isPhoto: string | undefined;
  permissionGranted: boolean;
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, requestPermission] = Camera.useCameraPermissions();

  const onPermissionDisabled = (callback: () => void) => {
    if (!permissionGranted) {
      requestPermission();
    } else {
      callback();
    }
  };

  return (
    <View style={cameraButtonsStyles.uploadPhotoBox}>
      {isPhoto && (
        <>
          <TouchableOpacity
            style={cameraButtonsStyles.cameraBtn}
            onPress={deletePhoto}
          >
            <MaterialIcons
              name="delete"
              size={24}
              color={variables.colorBlack}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={cameraButtonsStyles.cameraBtn}
            onPress={sharePic}
          >
            <EvilIcons
              name="share-apple"
              size={30}
              color={variables.colorBlack}
            />
          </TouchableOpacity>
        </>
      )}
      {!isPhoto && (
        <>
          <TouchableOpacity
            style={cameraButtonsStyles.cameraBtn}
            onPress={pickImage}
          >
            <AntDesign name="upload" size={24} color={variables.colorBlack} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              cameraButtonsStyles.cameraBtn,
              cameraButtonsStyles.cameraBtnBig,
            ]}
            onPress={() => onPermissionDisabled(takePic)}
          >
            <FontAwesome5
              name="camera"
              size={24}
              color={variables.colorBlack}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={cameraButtonsStyles.cameraBtn}
            onPress={() => onPermissionDisabled(toggleCameraType)}
          >
            <MaterialIcons
              name="flip-camera-ios"
              size={24}
              color={variables.colorBlack}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
