import { StyleSheet } from "react-native";

import { variables } from "@/app/styles/variables";

export const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: 300,
    borderRadius: variables.primaryBorderRadius,
    overflow: "hidden",
  },
  preview: {
    width: "100%",
    height: "100%",
    borderRadius: variables.primaryBorderRadius,
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: variables.bgSecondaryLight,
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    right: -15,
    bottom: 14,
  },
  progressBar: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "80%",
    transform: [{ translateX: -50 }],
  },
});

export const cameraButtonsStyles = StyleSheet.create({
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
