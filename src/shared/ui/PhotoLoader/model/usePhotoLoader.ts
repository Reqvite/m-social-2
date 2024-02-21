import { Camera, CameraType } from "expo-camera";
import { FlipType, manipulateAsync, SaveFormat } from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { shareAsync } from "expo-sharing";
import { useRef, useState } from "react";

export const usePhotoLoader = () => {
  const cameraRef = useRef<Camera>();

  const [type, setType] = useState(CameraType.back);
  const [hasCameraPermission] = Camera.useCameraPermissions();

  const [photo, setPhoto] = useState<string | undefined>(undefined);

  const takePic = async () => {
    const options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    if (cameraRef.current) {
      const newPhoto = await cameraRef.current.takePictureAsync(options);
      if (type === CameraType.front) {
        const manipResult = await manipulateAsync(
          newPhoto.uri,
          [{ rotate: 180 }, { flip: FlipType.Vertical }],
          { compress: 1, format: SaveFormat.PNG },
        );
        setPhoto(manipResult.uri);
      } else {
        setPhoto(newPhoto.uri);
      }
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const deletePhoto = () => {
    setPhoto(undefined);
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const sharePic = () => {
    if (photo) {
      shareAsync(photo);
    }
  };

  return {
    photo,
    type,
    cameraRef,
    hasCameraPermission,
    toggleCameraType,
    deletePhoto,
    pickImage,
    takePic,
    sharePic,
  };
};
