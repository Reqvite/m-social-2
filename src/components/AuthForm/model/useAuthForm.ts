import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useReducer, useState } from "react";
import { Alert } from "react-native";

import { FIREBASE_AUTH } from "@/app/configs/firebaseConfig";
import { actions as uiActions } from "@/redux/ui/slice";
import { deletePhoto, savePhoto } from "@/shared/lib/firebase/photos";
import { useAppDispatch } from "@/shared/lib/hooks";
import { validateUserAuthForm } from "@/shared/lib/validations";

type FormState = {
  photo: string | undefined;
  login: string;
  email: string;
  password: string;
};

type Action =
  | { type: "SET_PHOTO"; payload: string | undefined }
  | { type: "SET_LOGIN"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "RESET_STATE" };

const initialState: FormState = {
  photo: undefined,
  login: "",
  email: "",
  password: "",
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_PHOTO":
      return { ...state, photo: action.payload };
    case "SET_LOGIN":
      return { ...state, login: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export const useAuthForm = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(formReducer, initialState);
  const appDispatch = useAppDispatch();

  const onSignIn = async () => {
    try {
      setIsLoading(true);
      validateUserAuthForm({
        body: state,
      });
      await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        state.email,
        state.password,
      );
      dispatch({ type: "RESET_STATE" });
    } catch (e) {
      Alert.alert(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onProgress = (progress: number) => {
    setProgress(progress);
  };

  const onSignUp = async () => {
    let photo = undefined;
    try {
      setIsLoading(true);
      validateUserAuthForm({
        body: state,
        isRegister: true,
      });
      const { user } = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        state.email,
        state.password,
      );
      if (state?.photo) {
        photo = await savePhoto(state.photo, onProgress);
      }
      await updateProfile(user, {
        displayName: state.login,
        photoURL: photo?.downloadUrl,
      });
      dispatch({ type: "RESET_STATE" });
      appDispatch(uiActions.setIsRegisterCompleted());
    } catch (e) {
      if (photo) {
        await deletePhoto(photo?.downloadUrl);
      }
      Alert.alert(e.message);
    } finally {
      setIsLoading(false);
      setProgress(0);
    }
  };

  return { dispatch, state, isLoading, onSignIn, onSignUp, progress };
};
