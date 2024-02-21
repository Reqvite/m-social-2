import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { variables } from "@/app/styles/variables";

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
  return (
    <View style={styles.uploadPhotoBox}>
      {isPhoto && (
        <>
          <TouchableOpacity style={styles.cameraBtn} onPress={deletePhoto}>
            <MaterialIcons
              name="delete"
              size={24}
              color={variables.colorBlack}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraBtn} onPress={sharePic}>
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
          <TouchableOpacity style={styles.cameraBtn} onPress={pickImage}>
            <AntDesign name="upload" size={24} color={variables.colorBlack} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cameraBtn, styles.cameraBtnBig]}
            onPress={takePic}
            disabled={!permissionGranted}
          >
            <FontAwesome5
              name="camera"
              size={24}
              color={variables.colorBlack}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraBtn} onPress={toggleCameraType}>
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

const styles = StyleSheet.create({
  uploadPhotoBox: {
    zIndex: 100,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    bottom: 20,
    gap: 15,
  },
  cameraBtn: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: variables.grayColor,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraBtnBig: {
    width: 60,
    height: 60,
  },
});
