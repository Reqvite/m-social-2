import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import { FlipType, manipulateAsync, SaveFormat } from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { shareAsync } from "expo-sharing";
import { useCallback, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";

export const usePhotoLoader = (
  onChangePhoto: (photo: string | undefined) => void,
  photoProps: string | undefined,
) => {
  const cameraRef = useRef<Camera>();
  const [isFirstRequest, setIsFirstRequest] = useState(true);
  const [type, setType] = useState(CameraType.back);
  const [hasCameraPermission, requestPermission] =
    Camera.useCameraPermissions();
  const [isPhotoDeleted, setIsPhotoDeleted] = useState(false);
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  useEffect(() => {
    requestPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setDownloadPhoto = useCallback(
    (photo: string | undefined) => {
      setPhoto(photo);
      onChangePhoto(photo);
    },
    [onChangePhoto],
  );

  const deletePhoto = useCallback(() => {
    setDownloadPhoto(undefined);
  }, [setDownloadPhoto]);

  useEffect(() => {
    if (photoProps) {
      setIsPhotoDeleted(false);
    }
    if (!photoProps && !isPhotoDeleted) {
      deletePhoto();
      setIsPhotoDeleted(true);
    }
  }, [deletePhoto, isPhotoDeleted, photoProps]);

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
        setDownloadPhoto(manipResult.uri);
      } else {
        setDownloadPhoto(newPhoto.uri);
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
      setDownloadPhoto(result.assets[0].uri);
    }
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

  const onPermissionDisabled = async () => {
    await requestPermission();
    if (!hasCameraPermission?.granted && isFirstRequest) {
      Alert.alert("Turn on your camera permission in phone settings.");
      setIsFirstRequest(false);
    }
  };

  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("CreatePost");
  }, [hasCameraPermission, isFirstRequest, navigation]);

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
    onPermissionDisabled,
  };
};
