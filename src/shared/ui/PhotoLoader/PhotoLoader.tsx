import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { Image } from "expo-image";
import { RefObject } from "react";
import { View } from "react-native";

import { variables } from "@/app/styles/variables";
import { MOCK_AVATAR } from "@/shared/const";

import { Button } from "../Button/Button";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { CameraButtons } from "./CameraButtons";
import { usePhotoLoader } from "./model/usePhotoLoader";
import { styles } from "./styles";

type loaderVariants = "small" | "big";

type Props = {
  progress?: number;
  photo?: string | undefined;
  addStyles?: object;
  variant?: loaderVariants;
  onChangePhoto?: (photo: string | undefined) => void;
};

export const PhotoLoader = (props: Props) => {
  const {
    progress,
    photo: photoProps,
    addStyles,
    variant = "big",
    onChangePhoto = () => {},
  } = props;

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
    onPermissionDisabled,
  } = usePhotoLoader(onChangePhoto, photoProps);

  const updatedProgress = progress ? progress / 100 : null;

  const cameraView = (
    <View style={[styles.camera, addStyles && addStyles]}>
      <CameraButtons
        isPhoto={photo}
        permissionGranted={hasCameraPermission?.granted}
        onPermissionDisabled={onPermissionDisabled}
        toggleCameraType={toggleCameraType}
        deletePhoto={deletePhoto}
        pickImage={pickImage}
        takePic={takePic}
        sharePic={sharePic}
      />
      {hasCameraPermission?.granted ? (
        photo ? (
          <Image
            style={styles.preview}
            source={{
              uri: photo,
            }}
          />
        ) : null
      ) : (
        <Image
          style={styles.preview}
          source={{
            uri: photo ? photo : MOCK_AVATAR,
          }}
        />
      )}
    </View>
  );

  if (!hasCameraPermission?.granted && variant !== "small") {
    return <>{cameraView}</>;
  }

  if (variant === "big") {
    return (
      <Camera
        type={type}
        ref={cameraRef as RefObject<Camera>}
        style={styles.camera}
      >
        {cameraView}
      </Camera>
    );
  }

  if (variant === "small") {
    return (
      <View style={[styles.box, addStyles && addStyles]}>
        <Image
          style={styles.preview}
          source={{
            uri: photo ? photo : MOCK_AVATAR,
          }}
        />
        {progress ? (
          <ProgressBar
            addStyles={styles.progressBar}
            progress={updatedProgress!}
            width={null}
            color={variables.accentColor}
          />
        ) : null}
        <Button
          style={styles.icon}
          onPress={photo ? deletePhoto : pickImage}
          icon={
            photo ? (
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
            )
          }
        />
      </View>
    );
  }
};
